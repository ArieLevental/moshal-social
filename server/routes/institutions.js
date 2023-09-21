import express from "express";
import { getAllInstitutions } from "../controllers/institutions.js";
import { verifyToken } from "../middleware/auth.js";

const institutionsRouter = express.Router();

institutionsRouter.route("/").get(verifyToken, getAllInstitutions);

export default institutionsRouter;
