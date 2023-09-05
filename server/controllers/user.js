import User from "../models/User.js";
import Institution from "../models/Institution.js";
import Education from "../models/Education.js";

// CURRENTLY NOT IN USE, FIX WHEN IMPLEMENTED IN FRONTEND
export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body; // Assuming the request body contains the updated data

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true, // This option returns the updated document
      runValidators: true, // This option runs the validation on the updated data
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addEducationItem = async (req, res) => {
  try {
    const userId = req.params.id;
    const { institutionId, startYear, endYear, degree } = req.body; // Assuming the request body contains the updated data
    const newEducation = new Education({
      userId,
      institutionId,
      startYear,
      endYear,
      degree,
    });
    const savedEducation = await newEducation.save();

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { education: savedEducation._id } },
      {
        new: true, // This option returns the updated document
        runValidators: true, // This option runs the validation on the updated data
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    const updatedInstitution = await Institution.findByIdAndUpdate(
      institutionId,
      { $push: { students: userId } },
      {
        new: true, // This option returns the updated document
        runValidators: true, // This option runs the validation on the updated data
      }
    );

    if (!updatedInstitution) {
      return res.status(404).json({ message: "Institution not found" });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// export const getEducationItems = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const user = await User.findById(userId);
//     const educationItems = await Education.find({
//       _id: { $in: user.education },
//     });

//     // educationItems.map(async (item) => {
//     //   item.Institution = await Institution.findById(item.InstitutionId);
//     // });
//     await educationItems.forEach(async (item) => {
//       item.Institution = await Institution.findById(item.InstitutionId);
//     });

//     res
//       .status(200)
//       .json({ message: "Profile updated successfully", educationItems });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

export const getEducationItems = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    const educationItems = await Education.find({
      _id: { $in: user.education },
    });

    // TODO: fix the iteration

    res
      .status(200)
      .json({ message: "Profile updated successfully", educationItems });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
