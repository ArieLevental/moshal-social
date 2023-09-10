// USED FOR ONE TIME DATA LOAD, MAINLY FOR TESTING

import mongoose from "mongoose";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

const url0 = await getDownloadURL(ref(storage, "logos/Intel.jpg"));
const url1 = await getDownloadURL(ref(storage, "logos/Microsoft.jpg"));
const url2 = await getDownloadURL(ref(storage, "logos/Tnuva.jpg"));

const companyId = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const companies = [
  {
    _id: companyId[0],
    name: "Intel",
    logoPath: url0,
  },
  {
    _id: companyId[1],
    name: "Microsoft",
    logoPath: url1,
  },
  {
    _id: companyId[2],
    name: "Tnuva",
    logoPath: url2,
  },
];
