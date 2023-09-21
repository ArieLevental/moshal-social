import express from "express";
import { getProfileImg, uploadProfileImg } from "../controllers/storage.js";
import { verifyToken } from "../middleware/auth.js";
import multer from "multer";

const upload = multer();

const storageRouter = express.Router();

storageRouter
  .route("/profile/:id")
  .get(verifyToken, getProfileImg)
  .post(
    verifyToken,
    upload.single("userImage"),
    uploadProfileImg
  );

// storageRouter.route("/banner/:id").post(verifyToken);

export default storageRouter;
