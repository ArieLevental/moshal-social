// USED FOR ONE TIME DATA LOAD, MAINLY FOR TESTING

import mongoose from "mongoose";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

const userIds = [
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
];

const institutionId = [
  new mongoose.Types.ObjectId(), // 1
  new mongoose.Types.ObjectId(), // 2
  new mongoose.Types.ObjectId(), // 3
  new mongoose.Types.ObjectId(), // 4
  new mongoose.Types.ObjectId(), // 5
  new mongoose.Types.ObjectId(), // 6
  new mongoose.Types.ObjectId(), // 7
  new mongoose.Types.ObjectId(), // 8
  new mongoose.Types.ObjectId(), // 9
];

const companyIds = [
  new mongoose.Types.ObjectId(), // 1
  new mongoose.Types.ObjectId(), // 2
  new mongoose.Types.ObjectId(), // 3
  new mongoose.Types.ObjectId(), // 4
  new mongoose.Types.ObjectId(), // 5
  new mongoose.Types.ObjectId(), // 6
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

const jobsIds = [
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
];

// Users

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
    education: [educationIds[1], educationIds[0]],
    occupation: [occupationIds[0], occupationIds[11]],
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
    education: [educationIds[3], educationIds[2]],
    occupation: [occupationIds[1], occupationIds[4]],
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
    education: [educationIds[4]],
    occupation: [occupationIds[2]],
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
    education: [educationIds[5]],
    occupation: [occupationIds[3]],
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
    education: [educationIds[6]],
    occupation: [],
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
    education: [educationIds[7]],
    occupation: [occupationIds[6], occupationIds[5]],
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
    education: [],
    occupation: [occupationIds[7]],
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
    education: [],
    occupation: [occupationIds[8]],
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
    education: [],
    occupation: [],
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
    bio: "ovedet be kugel",
    phoneNumber: "0555535542",
    linkedIn: "",
    moshalStatus: "Staff",
    education: [],
    occupation: [occupationIds[9], occupationIds[10]],
    __v: 0,
  },
];

// Comapnies

const companyUrl0 = await getDownloadURL(ref(storage, "logos/Intel.jpg"));
const companyUrl1 = await getDownloadURL(ref(storage, "logos/Microsoft.jpg"));
const companyUrl2 = await getDownloadURL(ref(storage, "logos/Tnuva.jpg"));
const companyUrl3 = await getDownloadURL(ref(storage, "logos/Mobileye.jpg"));
const companyUrl4 = await getDownloadURL(ref(storage, "logos/Wix.jpg"));
const companyUrl5 = await getDownloadURL(ref(storage, "logos/Meta.jpg"));

export const companies = [
  {
    _id: companyIds[0],
    name: "Intel",
    employees: [userIds[0], userIds[1]],
    logoPath: companyUrl0,
  },
  {
    _id: companyIds[1],
    name: "Microsoft",
    employees: [userIds[2], userIds[3], userIds[1]],
    logoPath: companyUrl1,
  },
  {
    _id: companyIds[2],
    name: "Tnuva",
    employees: [userIds[5]],
    logoPath: companyUrl2,
  },
  {
    _id: companyIds[3],
    name: "Mobileye",
    employees: [userIds[5], userIds[6]],
    logoPath: companyUrl3,
  },
  {
    _id: companyIds[4],
    name: "Wix",
    employees: [userIds[7], userIds[9]],
    logoPath: companyUrl4,
  },
  {
    _id: companyIds[5],
    name: "Meta",
    employees: [userIds[0], userIds[9]],
    logoPath: companyUrl5,
  },
];

// Institutions

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

export const institutions = [
  {
    _id: institutionId[0],
    name: "Ariel University",
    logoPath: institutionUrl0,
    students: [userIds[0]],
  },
  {
    _id: institutionId[1],
    name: "Bar-Ilan University",
    logoPath: institutionUrl1,
    students: [userIds[0]],
  },
  {
    _id: institutionId[2],
    name: "Ben-Gurion University",
    logoPath: institutionUrl2,
    students: [userIds[1]],
  },
  {
    _id: institutionId[3],
    name: "Haifa University",
    logoPath: institutionUrl3,
    students: [userIds[2], userIds[1]],
  },
  {
    _id: institutionId[4],
    name: "Hebrew University",
    logoPath: institutionUrl4,
    students: [userIds[3]],
  },
  {
    _id: institutionId[5],
    name: "Technion",
    logoPath: institutionUrl5,
    students: [userIds[4]],
  },
  {
    _id: institutionId[6],
    name: "Tel-Aviv University",
    logoPath: institutionUrl6,
    students: [userIds[5]],
  },
  {
    _id: institutionId[7],
    name: "The Open University",
    logoPath: institutionUrl7,
    students: [],
  },
  {
    _id: institutionId[8],
    name: "Weizmann",
    logoPath: institutionUrl8,
    students: [],
  },
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

// userId: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User",
//   required: true,
// },
// companyId: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Company",
//   required: true,
// },
// content: {
//   type: String,
//   required: true,
//   min: 10,
//   max: 2000,
// },
// offerTitle: {
//   type: String,
//   required: true,
//   min: 2,
//   max: 100,
// },
// offerLink: {
//   type: String,
//   default: "",
// },
// expReq: {
//   type: String,
//   default: "",
// },
// referral: {
//   type: String,
//   default: "",
// },

export const jobs = [
  {
    _id: jobsIds[0],
    userId: userIds[0],
    companyId: companyIds[0],
    content:
      "We are looking for a highly motivated Software Engineer to join our team in Santa Clara, CA. In this role, you will play a pivotal role in developing and optimizing software solutions for cutting-edge semiconductor technologies. You'll collaborate with cross-functional teams, including hardware engineers and researchers, to enhance product performance and drive innovation. To excel in this position, you should have a Bachelor's degree in Computer Science, strong coding skills in C/C++, and experience with Linux. If you are passionate about pushing the boundaries of technology and want to work in a dynamic and challenging environment, we encourage you to apply. Join us in shaping the future of computing!",
    offerTitle: "Software Engineer",
    location: "Santa Clara, CA",
    offerLink: "https://jobs.intel.com/en",
    expReq: "2 years of experience",
    referral: "Haim Inje",
    __v: 0,
  },
  {
    _id: jobsIds[1],
    userId: userIds[1],
    companyId: companyIds[0],
    content:
      "At Microsoft in Redmond, WA, we are seeking a talented Data Scientist to join our team. As a Data Scientist, you will have the opportunity to analyze vast datasets, create predictive models, and provide actionable insights that will directly impact product performance and user experiences. You will collaborate closely with data engineers, product managers, and developers to shape the future of our products. To excel in this role, you should possess a Master's degree in Data Science, proficiency in Python/R programming, and a strong background in machine learning algorithms. If you are passionate about data-driven decision-making and want to work on cutting-edge technologies, we encourage you to apply and be part of our exciting journey.",
    offerTitle: "Data Scientist",
    location: "Redmond, WA",
    offerLink: "https://jobs.intel.com/en",
    expReq: "2 years of experience",
    referral: "Noa Levy",
    __v: 0,
  },
  {
    _id: jobsIds[2],
    userId: userIds[2],
    companyId: companyIds[1],
    content:
      "Tnuva, a leading name in the food industry, is looking for a dedicated Production Supervisor to join our team in Tel Aviv, Israel. In this role, you will be responsible for overseeing daily production operations, ensuring product quality, and managing a team of skilled production workers. You will play a crucial role in implementing process improvements to enhance efficiency and maintain the highest standards of quality. To excel in this position, you should have a Bachelor's degree in Industrial Engineering or a related field and possess at least 3 years of supervisory experience in food manufacturing. If you are a proactive and results-driven individual seeking a rewarding career in the food industry, we invite you to apply and be part of our mission to provide quality products to consumers worldwide.",
    offerTitle: "Production Supervisor",
    location: "Tel Aviv, Israel",
    offerLink: "https://www.linkedin.com/jobs/view/3714752555",
    expReq: "3 years of experience",
    referral: "Moshe Cohen",
    __v: 0,
  },
  {
    _id: jobsIds[3],
    userId: userIds[3],
    companyId: companyIds[2],
    content:
      "Mobileye, a global leader in autonomous driving technology, is looking for a passionate Hardware Engineer to join our team in Jerusalem, Israel. As a Hardware Engineer, you will have the opportunity to work on cutting-edge hardware components that are crucial for autonomous driving systems. Your responsibilities will include designing and developing these components, conducting testing and troubleshooting, and ensuring product reliability. To excel in this role, you should have a Bachelor's degree in Electrical Engineering, experience with PCB design, and a strong understanding of automotive safety standards. If you are excited about shaping the future of transportation and want to work in a dynamic and innovative environment, we encourage you to apply and help us drive the future of mobility.",
    offerTitle: "Hardware Engineer",
    location: "Jerusalem, Israel",
    offerLink: "https://www.linkedin.com/jobs/view/3714752556",
    expReq: "2 years of experience",
    referral: "Hadas Katz",
    __v: 0,
  },
  {
    _id: jobsIds[4],
    userId: userIds[4],
    companyId: companyIds[3],
    content:
      "Wix, a leading web development platform, is looking for a talented UX/UI Designer to join our team in the heart of New York City, NY. As a UX/UI Designer at Wix, you will play a pivotal role in creating user-centric designs for web and mobile applications. You'll collaborate closely with product managers and developers to deliver intuitive and visually appealing user experiences. To succeed in this role, you should have a Bachelor's degree in Design or a related field, proficiency in Adobe Creative Suite, and a strong portfolio showcasing your design skills. If you are passionate about design and want to work on projects that impact millions of users worldwide, we invite you to apply and be part of our creative and innovative team.",
    offerTitle: "UX/UI Designer",
    location: "New York City, NY",
    offerLink: "https://www.linkedin.com/jobs/view/3714752557",
    expReq: "2 years of experience",
    referral: "Guy Mezig",
    __v: 0,
  },
  {
    _id: jobsIds[5],
    userId: userIds[5],
    companyId: companyIds[4],
    content:
      "Meta (formerly Facebook) is looking for an experienced Product Manager to join our team in Menlo Park, CA. As a Product Manager at Meta, you will have the opportunity to define product strategy, prioritize features, and work closely with engineering and design teams to launch new products and enhance existing ones. To excel in this role, you should have a minimum of 5 years of product management experience, strong analytical skills, and a deep understanding of social media platforms and user behavior. If you are passionate about shaping the future of social technology and want to work with a global team of innovators, we encourage you to apply and be part of our mission to connect people worldwide.",
    offerTitle: "Product Manager",
    location: "Menlo Park, CA",
    offerLink:
      "https://www.alljobs.co.il/Search/UploadSingle.aspx?JobID=7385803",
    expReq: "5 years of experience",
    referral: "Adam Field",
    __v: 0,
  },
  {
    _id: jobsIds[6],
    userId: userIds[6],
    companyId: companyIds[4],
    content:
      "Join Intel as a Hardware Validation Engineer in Hillsboro, OR, and play a crucial role in ensuring the reliability of our hardware components. In this role, you will develop and execute validation plans, identify and resolve design issues, and collaborate with a talented team of engineers. To excel in this position, you should have a Bachelor's degree in Electrical Engineering, experience with validation tools, and strong problem-solving skills. If you are passionate about hardware and want to contribute to the development of cutting-edge technology, we encourage you to apply and be part of our innovative team.",
    offerTitle: "Hardware Validation Engineer",
    location: "Hillsboro, OR",
    offerLink:
      "https://www.alljobs.co.il/Search/UploadSingle.aspx?JobID=7429635",
    expReq: "2 years of experience",
    referral: "George",
    __v: 0,
  },
  {
    _id: jobsIds[7],
    userId: userIds[7],
    companyId: companyIds[5],
    content:
      "Tnuva is seeking a dynamic Marketing Manager to join our team in Tel Aviv, Israel. In this role, you will be responsible for developing and executing marketing strategies, launching new products, and managing advertising campaigns. You will analyze market trends and customer insights to drive brand growth. To excel in this position, you should have a Bachelor's degree in Marketing, a minimum of 5 years of marketing experience, and excellent communication skills. If you are passionate about marketing and want to contribute to the success of a renowned brand in the food industry, we invite you to apply and be part of our marketing team.",
    offerTitle: "Marketing Manager",
    location: "Tel Aviv, Israel",
    offerLink: "https://il.indeed.com/?r=us&vjk=5b26af70d46734f7",
    expReq: "5 years of experience",
    referral: "",
    __v: 0,
  },
  {
    _id: jobsIds[8],
    userId: userIds[8],
    companyId: companyIds[3],
    content:
      "Mobileye is looking for a talented Embedded Software Engineer to join our team in Munich, Germany. In this role, you will develop embedded software for advanced driver-assistance systems, contributing to the safety and reliability of autonomous vehicles. You will collaborate with international teams to ensure seamless software integration. To excel in this position, you should have a Master's degree in Computer Engineering, strong programming skills in C/C++, and experience with embedded systems. If you are excited about the future of mobility and want to work on innovative technologies, we encourage you to apply and be part of our mission to make roads safer for everyone.",
    offerTitle: "Embedded Software Engineer",
    location: "Munich, Germany",
    offerLink: "https://il.indeed.com/?r=us&vjk=b8cde6bbab3a37f3",
    expReq: "2 years of experience",
    referral: "",
    __v: 0,
  },
  {
    _id: jobsIds[9],
    userId: userIds[9],
    companyId: companyIds[5],
    content:
      "Join the Wix team in San Francisco, CA, as a Customer Support Specialist and play a vital role in providing exceptional support to our users. In this role, you will assist users with website-related inquiries and technical issues through email and chat. You will have the opportunity to make a positive impact on our users' experiences. To excel in this position, you should have strong communication skills, patience, and a customer-centric mindset. If you are passionate about helping users succeed in building their online presence and want to be part of a global tech company, we encourage you to apply and join our customer support team.",
    offerTitle: "Customer Support Specialist",
    location: "San Francisco, CA",
    offerLink: "https://il.indeed.com/?r=us&vjk=99c77a2dde432f04",
    expReq: "1 year of experience",
    referral: "Saar Revah",
    __v: 0,
  },
];
