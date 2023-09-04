import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import User from "../models/User.js";
import { storage } from "../firebase.js";

export const uploadProfileImg = async (req, res) => {
  console.log(storage);
  try {
    // TODO: fix double upload, upload picture not working for new users !!!
    const pathReference = ref(storage, `profile/${req.params.id}.jpeg`);
    const url = await getDownloadURL(pathReference);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { picturePath: url },
      {
        new: true, // This option returns the updated document
        runValidators: true, // This option runs the validation on the updated data
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const storageRef = ref(storage, "profile/" + `${req.params.id}.jpeg`);
    await uploadBytes(storageRef, req.file.buffer);

    console.log("File uploaded successfully");
    res.status(200).json({ storageRef });
  } catch (err) {
    // Handle any errors that occurred during the upload
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

export const getProfileImg = async (req, res) => {
  try {
    const pathReference = ref(storage, `profile/${req.params.id}.jpeg`);
    const url = await getDownloadURL(pathReference);

    res.status(200).json({ url: url });
  } catch (error) {
    // Handle any errors that occurred during the upload
    res.status(500).json({ message: err.message });
  }
};
