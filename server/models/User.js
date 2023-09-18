import mongoose from "mongoose";
import {
  validateEmail,
  validateLinkedInUrl,
  validateLink,
} from "../utils/validators.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      min: [2, "First name must be at least 2 characters."],
      max: [50, "First name cannot exceed 50 characters."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      min: [2, "Last name must be at least 2 characters."],
      max: [50, "Last name cannot exceed 50 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      min: [5, "Email must be at least 5 characters."],
      max: [50, "Email cannot exceed 50 characters."],
      unique: [true, "Email is already in use."],
      index: true,
      validate: {
        validator: validateEmail,
        message: "Invalid email address.",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      min: [5, "Password must be at least 5 characters."],
    },
    picturePath: {
      type: String,
      default: "",
      validate: {
        validator: validateLink,
        message: "Invalid picture URL.",
      },
    },
    bannerPath: {
      type: String,
      default: "",
      validate: {
        validator: validateLink,
        message: "Invalid picture URL.",
      },
    },
    location: {
      type: String,
      min: [2, "Location must be at least 2 characters."],
      max: [20, "Location cannot exceed 20 characters."],
      default: "",
    },
    bio: {
      type: String,
      max: [200, "Bio cannot exceed 200 characters."],
      default: "",
    },
    dateOfBirth: {
      type: Date,
      trim: true,
    },
    phoneNumber: {
      type: String,
      min: [7, "Phone number must be at least 7 characters."],
      max: [17, "Phone number cannot exceed 17 characters."],
      unique: [true, "Phone number is already in use."],
      default: "",
    },
    linkedIn: {
      type: String,
      validate: {
        validator: validateLinkedInUrl,
        message: "Invalid LinkedIn profile URL.",
      },
      default: "",
    },
    moshalStatus: {
      type: String,
      enum: {
        values: ["", "Scholar", "Alumni", "Staff"],
        message: "Invalid moshalStatus value.",
      },
      default: "",
    },
    education: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education",
      },
    ],
    occupation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Occupation",
      },
    ],
  },
  { timestamps: true }
);

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = mongoose.model("User", userSchema);

export default User;
