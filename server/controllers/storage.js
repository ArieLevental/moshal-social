import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import User from "../models/User.js";
import { storage } from "../firebase.js";

export const uploadProfileImg = async (req, res) => {
  try {
    // Check if the request contains a file to upload
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }

    // Create a reference for the file to be uploaded
    const storageRef = ref(storage, `profile/${req.params.id}.jpeg`);

    // Upload the file
    await uploadBytes(storageRef, req.file.buffer).then((snapshot) => {
      console.log("Uploaded a blob or file! ", snapshot);
    });

    // Get the download URL of the uploaded file
    const url = await getDownloadURL(storageRef);

    // Update the user's picturePath with the download URL
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

    console.log("File uploaded successfully");
    res.status(200).json({ picturePath: url });
  } catch (err) {
    // Handle any errors that occurred during the upload
    console.error(err.message);
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
