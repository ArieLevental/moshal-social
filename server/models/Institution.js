import mongoose from "mongoose";

const institutionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        sparse: true,
      },
    ],
    logoPath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Institution = mongoose.model("Institution", institutionSchema);

export default Institution;
