import mongoose  from "mongoose";


const educationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    institutionId: {
      type: String,
      required: true,
    },
    startYear: {
      type: Number,
      min: 1990,
      max: new Date().getFullYear() + 1,
    },
    endYear: {
      type: Number,
      min: [1990, "endYear must be greater than or equal to 1990."],
      max: new Date().getFullYear() + 10,
    },
    degree: {
      type: String,
      min: 4,
      max: 30,
    },
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", educationSchema);

export default Education;
