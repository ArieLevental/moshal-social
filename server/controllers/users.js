import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort("firstName")
      .populate(["education", "occupation"]);

    if (!users) {
      throw { message: "Users not found", statusCode: 404 };
    }
    
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
