import mongoose from "mongoose";

const educationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    institutionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institution",
      required: true,
    },
    startYear: {
      type: Number,
      min: 1990,
      max: new Date().getFullYear() + 1,
      default: 1990,
    },
    endYear: {
      type: Number,
      min: [1990, "endYear must be greater than or equal to 1990."],
      max: new Date().getFullYear() + 10,
      default: 1990,
    },
    degree: {
      type: String,
      min: 4,
      max: 30,
      default: "",
    },
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", educationSchema);

export default Education;
