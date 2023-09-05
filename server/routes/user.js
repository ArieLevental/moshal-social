import express from "express";
import { getUser, updateUser, addEducationItem } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

// Handle all routes that start with /user
const userRouter = express.Router();

userRouter
  .route("/:id")
  .get(verifyToken, getUser)
  .patch(verifyToken, updateUser);

userRouter.route("/addEducationItem/:id").post(verifyToken, addEducationItem);

export default userRouter;
