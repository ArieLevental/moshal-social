// USED FOR ONE TIME DATA LOAD, MAINLY FOR TESTING

import mongoose from "mongoose";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

export const userIds = [
  new mongoose.Types.ObjectId(),
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

export const users = [
  {
    _id: userIds[0],
    firstName: "Haim",
    lastName: "Inje",
    email: "haim@moshal.com",
    password: "$2b$10$dsasdgsagasda//G9J23423Q8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Room 12",
    bio: "Infi lover",
    phoneNumber: "0541591325",
    linkedIn: "",
    moshalStatus: "Scholar",
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Eliav",
    lastName: "Dayanof",
    email: "Eliav@moshal.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQSDFDF4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Room 14",
    bio: "IML for life",
    phoneNumber: "0521591513",
    linkedIn: "",
    moshalStatus: "Scholar",
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "David Tzvi",
    lastName: "Kadish",
    email: "David@moshal.com",
    password: "$2b$10*nksfsdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Room 16",
    bio: "I<3DZ",
    phoneNumber: "0551291395",
    linkedIn: "",
    moshalStatus: "Scholar",
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Amir",
    lastName: "Hubara",
    email: "Hila@moshal.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Ramat Gan",
    bio: "Amazing!",
    phoneNumber: "0541591234",
    linkedIn: "",
    moshalStatus: "Staff",
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Efi",
    lastName: "Avraham",
    email: "Efi@moshal.com",
    password: "$2b$10$lkanfsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "San Fran, CA",
    bio: "Not here",
    phoneNumber: "05419324595",
    linkedIn: "",
    moshalStatus: "Alumni",
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Simha",
    lastName: "Rotman",
    email: "Simha@moshal.com",
    password: "$2b$10$dsasd23423da//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Jerusalem",
    bio: "Reform now!",
    phoneNumber: "0541592432",
    linkedIn: "",
    moshalStatus: "Alumni",
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Vladimir",
    lastName: "Moshalski",
    email: "theOneAndOnly@moshal.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Arav a saudit",
    bio: "Oev krembo ve dubim",
    phoneNumber: "0544564564",
    linkedIn: "",
    moshalStatus: "Staff",
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Aviram",
    lastName: "Malfuf",
    email: "Malfufi@mail.huji.ac.il",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "New York, City",
    bio: "Oev et kulam, rak lo oti",
    phoneNumber: "0582242110",
    linkedIn: "",
    moshalStatus: "Scholar",
    __v: 0,
  },
  {
    _id: userIds[8],
    firstName: "Moshe",
    lastName: "Mosheshwillie",
    email: "laflaf@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Jerusalem, IR",
    bio: "Stam masheu",
    phoneNumber: "0559929992",
    linkedIn: "",
    moshalStatus: "Scholar",
    __v: 0,
  },
  {
    _id: userIds[9],
    firstName: "Noa",
    lastName: "Levy",
    email: "bruhClown@moshal.co.il",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Petach Tiquwa, IL",
    bio: "oved be kugel",
    phoneNumber: "0555535542",
    linkedIn: "",
    moshalStatus: "Staff",
    __v: 0,
  },
];

const companyUrl0 = await getDownloadURL(ref(storage, "logos/Intel.jpg"));
const companyUrl1 = await getDownloadURL(ref(storage, "logos/Microsoft.jpg"));
const companyUrl2 = await getDownloadURL(ref(storage, "logos/Tnuva.jpg"));
const companyUrl3 = await getDownloadURL(ref(storage, "logos/Mobileye.jpg"));
const companyUrl4 = await getDownloadURL(ref(storage, "logos/Wix.jpg"));
const companyUrl5 = await getDownloadURL(ref(storage, "logos/Meta.jpg"));

const companyIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const companies = [
  {
    _id: companyIds[0],
    name: "Intel",
    logoPath: companyUrl0,
  },
  {
    _id: companyIds[1],
    name: "Microsoft",
    logoPath: companyUrl1,
  },
  {
    _id: companyIds[2],
    name: "Tnuva",
    logoPath: companyUrl2,
  },
  {
    _id: companyIds[3],
    name: "Mobileye",
    logoPath: companyUrl3,
  },
  {
    _id: companyIds[4],
    name: "Wix",
    logoPath: companyUrl4,
  },
  {
    _id: companyIds[5],
    name: "Meta",
    logoPath: companyUrl5,
  },
];

const institutionUrl0 = await getDownloadURL(ref(storage, "logos/Ariel.jpg"));
const institutionUrl1 = await getDownloadURL(
  ref(storage, "logos/Bar-Ilan.jpg")
);
const institutionUrl2 = await getDownloadURL(
  ref(storage, "logos/Ben-Gurion.jpg")
);
const institutionUrl3 = await getDownloadURL(ref(storage, "logos/Haifa.jpg"));
const institutionUrl4 = await getDownloadURL(ref(storage, "logos/Hebrew.jpg"));
const institutionUrl5 = await getDownloadURL(
  ref(storage, "logos/Technion.jpg")
);
const institutionUrl6 = await getDownloadURL(
  ref(storage, "logos/Tel-Aviv.jpg")
);
const institutionUrl7 = await getDownloadURL(ref(storage, "logos/Open.jpg"));
const institutionUrl8 = await getDownloadURL(
  ref(storage, "logos/Weizmann.jpg")
);

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
    logoPath: institutionUrl0,
  },
  {
    _id: institutionId[1],
    name: "Bar-Ilan University",
    logoPath: institutionUrl1,
  },
  {
    _id: institutionId[2],
    name: "Ben-Gurion University",
    logoPath: institutionUrl2,
  },
  {
    _id: institutionId[3],
    name: "Haifa University",
    logoPath: institutionUrl3,
  },
  {
    _id: institutionId[4],
    name: "Hebrew University",
    logoPath: institutionUrl4,
  },
  {
    _id: institutionId[5],
    name: "Technion",
    logoPath: institutionUrl5,
  },
  {
    _id: institutionId[6],
    name: "Tel-Aviv University",
    logoPath: institutionUrl6,
  },
  {
    _id: institutionId[7],
    name: "The Open University",
    logoPath: institutionUrl7,
  },
  {
    _id: institutionId[8],
    name: "Weizmann",
    logoPath: institutionUrl8,
  },
];

const occupationIds = [
  new mongoose.Types.ObjectId(), // 1
  new mongoose.Types.ObjectId(), // 2
  new mongoose.Types.ObjectId(), // 3
  new mongoose.Types.ObjectId(), // 4
  new mongoose.Types.ObjectId(), // 5
  new mongoose.Types.ObjectId(), // 6
  new mongoose.Types.ObjectId(), // 7
  new mongoose.Types.ObjectId(), // 8
  new mongoose.Types.ObjectId(), // 9
  new mongoose.Types.ObjectId(), // 10
  new mongoose.Types.ObjectId(), // 11
  new mongoose.Types.ObjectId(), // 12
];

export const occupations = [
  {
    _id: occupationIds[0],
    userId: userIds[0],
    companyId: companyIds[0],
    position: "Full Stack Developer",
    startYear: 2017,
    endYear: 2019,
    __v: 0,
  },
  {
    _id: occupationIds[1],
    userId: userIds[1],
    companyId: companyIds[0],
    position: "Software Engineer",
    startYear: 2016,
    endYear: 2021,
    __v: 0,
  },
  {
    _id: occupationIds[2],
    userId: userIds[2],
    companyId: companyIds[1],
    position: "Data Scientist",
    startYear: 2021,
    endYear: 2023,
    __v: 0,
  },
  {
    _id: occupationIds[3],
    userId: userIds[3],
    companyId: companyIds[1],
    position: "Cybersecurity Analyst",
    startYear: 2005,
    endYear: 2007,
    __v: 0,
  },
  {
    _id: occupationIds[4],
    userId: userIds[1],
    companyId: companyIds[1],
    position: "Cloud Solutions Architect",
    startYear: 2022,
    endYear: 2022,
    __v: 0,
  },
  {
    _id: occupationIds[5],
    userId: userIds[5],
    companyId: companyIds[2],
    position: "DevOps Engineer",
    startYear: 2015,
    endYear: 2016,
    __v: 0,
  },
  {
    _id: occupationIds[6],
    userId: userIds[5],
    companyId: companyIds[3],
    position: "Machine Learning Engineer",
    startYear: 2021,
    endYear: 2023,
    __v: 0,
  },
  {
    _id: occupationIds[7],
    userId: userIds[6],
    companyId: companyIds[3],
    position: "Network Engineer",
    startYear: 2009,
    endYear: 2011,
    __v: 0,
  },
  {
    _id: occupationIds[8],
    userId: userIds[7],
    companyId: companyIds[4],
    position: "AI Ethicist",
    startYear: 2017,
    endYear: 2019,
    __v: 0,
  },
  {
    _id: occupationIds[9],
    userId: userIds[9],
    companyId: companyIds[4],
    position: "Quantum Computing Researcher",
    startYear: 2021,
    endYear: 2022,
    __v: 0,
  },
  {
    _id: occupationIds[10],
    userId: userIds[9],
    companyId: companyIds[5],
    position: "AR/VR Developer",
    startYear: 2014,
    endYear: 2018,
    __v: 0,
  },
  {
    _id: occupationIds[11],
    userId: userIds[0],
    companyId: companyIds[5],
    position: "Blockchain Developer",
    startYear: 2013,
    endYear: 2019,
    __v: 0,
  },
];

const educationIds = [
  new mongoose.Types.ObjectId(), // 1
  new mongoose.Types.ObjectId(), // 2
  new mongoose.Types.ObjectId(), // 3
  new mongoose.Types.ObjectId(), // 4
  new mongoose.Types.ObjectId(), // 5
  new mongoose.Types.ObjectId(), // 6
  new mongoose.Types.ObjectId(), // 7
  new mongoose.Types.ObjectId(), // 8
];

export const educations = [
  {
    _id: educationIds[0],
    userId: userIds[0],
    institutionId: institutionId[0],
    startYear: 2013,
    endYear: 2016,
    degree: "Computer Science",
    __v: 0,
  },
  {
    _id: educationIds[1],
    userId: userIds[0],
    institutionId: institutionId[1],
    startYear: 2012,
    endYear: 2013,
    degree: "Biomedical Engineering",
    __v: 0,
  },
  {
    _id: educationIds[2],
    userId: userIds[1],
    institutionId: institutionId[2],
    startYear: 2019,
    endYear: 2021,
    degree: "Environmental Science",
    __v: 0,
  },
  {
    _id: educationIds[3],
    userId: userIds[1],
    institutionId: institutionId[3],
    startYear: 2017,
    endYear: 2019,
    degree: "Psychology",
    __v: 0,
  },
  {
    _id: educationIds[4],
    userId: userIds[2],
    institutionId: institutionId[3],
    startYear: 2013,
    endYear: 2016,
    degree: "Business Administration",
    __v: 0,
  },
  {
    _id: educationIds[5],
    userId: userIds[3],
    institutionId: institutionId[4],
    startYear: 2011,
    endYear: 2015,
    degree: "Mechanical Engineering",
    __v: 0,
  },
  {
    _id: educationIds[6],
    userId: userIds[4],
    institutionId: institutionId[5],
    startYear: 2017,
    endYear: 2020,
    degree: "Economics",
    __v: 0,
  },
  {
    _id: educationIds[7],
    userId: userIds[5],
    institutionId: institutionId[6],
    startYear: 2015,
    endYear: 2019,
    degree: "Biology",
    __v: 0,
  },
];