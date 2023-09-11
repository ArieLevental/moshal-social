import mongoose from "mongoose";

const jobOfferSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    content: {
      type: String,
      required: true,
      min: 10,
      max: 2000,
    },
    offerTitle: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    location: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    offerLink: {
      type: String,
      default: "",
    },
    expReq: {
      type: String,
      default: "",
    },
    referral: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const JobOffer = mongoose.model("JobOffer", jobOfferSchema);

export default JobOffer;
