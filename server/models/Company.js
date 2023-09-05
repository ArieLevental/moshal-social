import mongoose from "mongoose";

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true, // Ensures uniqueness within the array
        // sparse: true, // Allows null (empty) values without causing conflicts
      },
    ],
    logoPath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
