// USED FOR ONE TIME DATA LOAD, MAINLY FOR TESTING

import mongoose from "mongoose";

const userIds = [
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
    firstName: "Hila",
    lastName: "Masheu",
    email: "Hila@moshal.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "",
    bannerPath: "",
    location: "Ramat Gan",
    bio: "AMAZINGGGGG!",
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
    bio: "Oev et kulam, rak lo odim",
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
    bio: "oev et kulam, rak lo aravim",
    phoneNumber: "0559929992",
    linkedIn: "",
    moshalStatus: "Scholar",
    __v: 0,
  },
  {
    _id: userIds[9],
    firstName: "Noa",
    lastName: "Levy",
    email: "sexyClown@moshal.co.il",
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

// export const posts = [
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     location: "New York, CA",
//     description: "Some really long random description",
//     picturePath: "post1.jpeg",
//     userPicturePath: "p3.jpeg",
//     likes: new Map([
//       [userIds[0], true],
//       [userIds[2], true],
//       [userIds[3], true],
//       [userIds[4], true],
//     ]),
//     comments: [
//       "random comment",
//       "another random comment",
//       "yet another random comment",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[3],
//     firstName: "Whatcha",
//     lastName: "Doing",
//     location: "Korea, CA",
//     description:
//       "Another really long random description. This one is longer than the previous one.",
//     picturePath: "post2.jpeg",
//     userPicturePath: "p6.jpeg",
//     likes: new Map([
//       [userIds[7], true],
//       [userIds[4], true],
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),
//     comments: [
//       "one more random comment",
//       "and another random comment",
//       "no more random comments",
//       "I lied, one more random comment",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[4],
//     firstName: "Jane",
//     lastName: "Doe",
//     location: "Utah, CA",
//     description:
//       "This is the last really long random description. This one is longer than the previous one.",
//     picturePath: "post3.jpeg",
//     userPicturePath: "p5.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//       [userIds[5], true],
//     ]),
//     comments: [
//       "one more random comment",
//       "I lied, one more random comment",
//       "I lied again, one more random comment",
//       "Why am I doing this?",
//       "I'm bored",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     location: "Los Angeles, CA",
//     description:
//       "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
//     picturePath: "post4.jpeg",
//     userPicturePath: "p7.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//     ]),
//     comments: [
//       "I lied again, one more random comment",
//       "Why am I doing this?",
//       "I'm bored",
//       "I'm still bored",
//       "All I want to do is play video games",
//       "I'm going to play video games",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     location: "Chicago, IL",
//     description:
//       "Just a short description. I'm tired of typing. I'm going to play video games now.",
//     picturePath: "post5.jpeg",
//     userPicturePath: "p8.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[3], true],
//       [userIds[5], true],
//       [userIds[7], true],
//     ]),
//     comments: [
//       "I lied again, one more random comment",
//       "Why am I doing this?",
//       "Man I'm bored",
//       "What should I do?",
//       "I'm going to play video games",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     location: "Washington, DC",
//     description:
//       "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
//     picturePath: "post6.jpeg",
//     userPicturePath: "p9.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),

//     comments: [
//       "Can I play video games now?",
//       "No let's actually study",
//       "Never mind, I'm going to play video games",
//       "Stop it.",
//       "Michael, stop it.",
//     ],
//   },
// ];
