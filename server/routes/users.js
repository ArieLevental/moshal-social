import express from "express";
const userRouter = express.Router();

import { getUser, updateUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../middleware/storage.js";

userRouter
  .route("/:id")
  .get(getUser) // NEED IN ALL - VERYIFY TOKEN
  .patch(updateUser)
  .post(upload.single("userImage"), (req, res) => {
    
    res.send("nice");
  });

export default userRouter;
