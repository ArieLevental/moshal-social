import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import userRouter from "./routes/user.js";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import storageRouter from "./routes/storage.js";
import institutionRouter from "./routes/institution.js";
import institutionsRouter from "./routes/institutions.js";

/* USED FOR ONE-TIME DATA LOAD */
import User from "./models/User.js";
import { users } from "./data/index.js";

/* USED FOR ONE-TIME DATA LOAD */
import Institution from "./models/Institution.js";
import { institutions } from "./data/institutions.js";

dotenv.config();

// APP CONFIG
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ASSETS SETUP
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// ROUTES SETUP
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/users", usersRouter);
app.use("/storage", storageRouter);
app.use("/institution", institutionRouter);
app.use("/institutions", institutionsRouter);

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);

    // Institution.insertMany(institutions);
  })
  .catch((error) => console.log(`${error} did not connect`));
