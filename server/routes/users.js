import express from "express";
const usersRouter = express.Router();

import { getAllUsers } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

usersRouter.route("/").get(verifyToken, getAllUsers);

export default usersRouter;
