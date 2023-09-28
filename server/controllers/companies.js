import Company from '../models/Company.js'

export const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find()
    if (!companies) {
      throw { message: 'Companies not found', statusCode: 404 }
    }

    res.status(200).json(companies)
  } catch (err) {
    next(err)
  }
}
