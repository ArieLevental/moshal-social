const mongoose = require("mongoose");

const jobOfferSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      min: 10,
      max: 2000,
    },
    companyId: {
      type: String,
      required: true,
    },
    offerTitle: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    offerLink: {
      type: String,
    },
    expReq: {
      type: String,
    },
    referral: {
      type: String,
    },
  },
  { timestamps: true }
);

const JobOffer = mongoose.model("JobOffer", jobOfferSchema);

export default JobOffer;
