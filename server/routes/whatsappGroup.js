import express from "express";
import {
  getAllWhatsappGroups,
  newWhatsappGroup,
  updateWhatsappGroup,
  deleteWhatsappGroup,
} from "../controllers/whatsappGroup.js";
import { verifyToken } from "../middleware/auth.js";

const whatsappGroupRouter = express.Router();

whatsappGroupRouter.route("/").get(verifyToken, getAllWhatsappGroups);
whatsappGroupRouter.route("/").post(verifyToken, newWhatsappGroup);
whatsappGroupRouter.route("/:id").patch(verifyToken, updateWhatsappGroup);
whatsappGroupRouter.route("/:id").delete(verifyToken, deleteWhatsappGroup);

export default whatsappGroupRouter;
