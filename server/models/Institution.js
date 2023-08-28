import mongoose  from "mongoose";


const institutionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    students: {
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

const Institution = mongoose.model("Institution", institutionSchema);

export default Institution;
