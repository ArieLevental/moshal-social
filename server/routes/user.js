import express from "express";
const userRouter = express.Router();

import { getUser, updateUser} from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../middleware/storage.js";

userRouter
  .route("/:id")
  .get(verifyToken, getUser) // NEED IN ALL - VERYIFY TOKEN
  .patch(verifyToken, updateUser)
  .post(verifyToken, upload.single("userImage"), (req, res) => {
    res.send("nice");
  });

export default userRouter;
