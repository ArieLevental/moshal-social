import Institution from "../models/Institution.js";

export const getAllInstitutions = async (req, res, next) => {
  try {
    const institutions = await Institution.find();
    if (!institutions) {
      throw { message: "Institutions not found", statusCode: 404 };
    }

    res.status(200).json(institutions);
  } catch (err) {
    next(err);
  }
};
