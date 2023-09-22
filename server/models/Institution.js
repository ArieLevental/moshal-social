import mongoose from "mongoose";
import { validateUser, validateLink } from "../utils/validators.js";

const institutionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minlength: [2, "Name must be at least 2 characters long."],
      maxlength: [50, "Name cannot exceed 50 characters."],
      unique: [true, "Name must be unique."],
      index: true,
      trim: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        validate: {
          validator: validateUser,
          message: "Invalid userId.",
        },
      },
    ],
    logoPath: {
      type: String,
      default: "",
      validate: {
        validator: validateLink,
        message: "Invalid logoPath value.",
      },
    },
  },
  { timestamps: true }
);

const Institution = mongoose.model("Institution", institutionSchema);

export default Institution;
