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
    employees: {
      type: Array,
      default: [],
    },
    logoPath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
