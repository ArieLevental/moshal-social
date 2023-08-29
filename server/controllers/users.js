import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
