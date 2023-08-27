const mongoose = require("mongoose");

const occupationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    startYear: {
      type: Number,
      required: true,
    },
    endYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Occupation = mongoose.model("Occupation", occupationSchema);

export default Occupation;
