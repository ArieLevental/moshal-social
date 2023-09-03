import express from "express";
import { getUser, updateUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../middleware/storage.js";

// Handle all routes that start with /user
const userRouter = express.Router();

userRouter
  .route("/:id")
  .get(verifyToken, getUser)
  .patch(verifyToken, updateUser)
  .post(verifyToken, upload.single("userImage"), (req, res) => {
    console.log(req.file);
    res.status(200).send("Image uploaded successfully");
  });

export default userRouter;
