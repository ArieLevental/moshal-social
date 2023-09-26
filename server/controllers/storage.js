import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import User from "../models/User.js";
import { storage } from "../utils/firebase.js";

const uploadFile = async (storageRef, buffer) => {
  await uploadBytes(storageRef, buffer);
};

export const uploadProfileImg = async (req, res, next) => {
  try {
    if (!req.file) {
      throw { message: "No file provided", statusCode: 400 };
    }

    // Save the file to Firebase Storage
    const storageRef = ref(storage, `avatars/${req.params.id}.jpeg`);
    await uploadFile(storageRef, req.file.buffer);
    const url = await getDownloadURL(storageRef);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { picturePath: url },
      {
        new: true, // This option returns the updated document
        runValidators: true,
      }
    );

    if (!updatedUser) {
      throw { message: "Failed to update user", statusCode: 404 };
    }

    res.status(200).json({ picturePath: url });
  } catch (err) {
    next(err);
  }
};

export const getProfileImg = async (req, res, next) => {
  try {
    const pathReference = ref(storage, `avatars/${req.params.id}.jpeg`);
    const url = await getDownloadURL(pathReference);

    res.status(200).json({ url: url });
  } catch (error) {
    next(err);
  }
};
