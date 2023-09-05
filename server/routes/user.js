import express from "express";
import { getUser, updateUser, addEducationItem, getEducationItems } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

// Handle all routes that start with /user
const userRouter = express.Router();

userRouter
  .route("/:id")
  .get(verifyToken, getUser)
  .patch(verifyToken, updateUser);

userRouter.route("/addEducationItem/:id").post(verifyToken, addEducationItem);

userRouter.route("/getEducationItems/:id").get(verifyToken, getEducationItems);

export default userRouter;
