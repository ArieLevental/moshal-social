const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 5,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    bannerPath: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      min: 2,
      max: 20,
    },
    bio: {
      type: String,
      max: 200,
    },
    phoneNumber: {
      type: String,
      min: 7,
      max: 17,
      unique: true,
    },
    linkedIn: {
      type: String,
      unique: true,
    },
    moshalStatus: {
      type: String,
      enum: ["", "Scholar", "Alumni", "Staff"],
      default: "",
    },
    education: {
      type: Array,
      default: [],
    },
    occupation: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
