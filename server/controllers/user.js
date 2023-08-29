import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body; // Assuming the request body contains the updated data
    console.log(updatedData);

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true, // This option returns the updated document
      runValidators: true, // This option runs the validation on the updated data
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};