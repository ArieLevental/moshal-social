import mongoose from "mongoose";

const whatsappGroupSchema = mongoose.Schema({
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  link: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  tags: [
    {
      type: String,
      min: 2,
      max: 20,
    },
  ],
});

const WhatsappGroup = mongoose.model("WhatsappGroup", whatsappGroupSchema);

export default WhatsappGroup;
