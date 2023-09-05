import mongoose from "mongoose";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

const url0 = await getDownloadURL(ref(storage, "logos/Ariel.jpg"));
const url1 = await getDownloadURL(ref(storage, "logos/Bar-Ilan.jpg"));
const url2 = await getDownloadURL(ref(storage, "logos/Ben-Gurion.jpg"));
const url3 = await getDownloadURL(ref(storage, "logos/Haifa.jpg"));
const url4 = await getDownloadURL(ref(storage, "logos/Hebrew.jpg"));
const url5 = await getDownloadURL(ref(storage, "logos/Technion.jpg"));
const url6 = await getDownloadURL(ref(storage, "logos/Tel-Aviv.jpg"));
const url7 = await getDownloadURL(ref(storage, "logos/Open.jpg"));
const url8 = await getDownloadURL(ref(storage, "logos/Weizmann.jpg"));

const institutionId = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const institutions = [
  {
    _id: institutionId[0],
    name: "Ariel University",
    logoPath: url0,
  },
  {
    _id: institutionId[1],
    name: "Bar-Ilan University",
    logoPath: url1,
  },
  {
    _id: institutionId[2],
    name: "Ben-Gurion University",
    logoPath: url2,
  },
  {
    _id: institutionId[3],
    name: "Haifa University",
    logoPath: url3,
  },
  {
    _id: institutionId[4],
    name: "Hebrew University",
    logoPath: url4,
  },
  {
    _id: institutionId[5],
    name: "Technion",
    logoPath: url5,
  },
  {
    _id: institutionId[6],
    name: "Tel-Aviv University",
    logoPath: url6,
  },
  {
    _id: institutionId[7],
    name: "The Open University",
    logoPath: url7,
  },
  {
    _id: institutionId[8],
    name: "Weizmann",
    logoPath: url8,
  },
];
