import Company from '../models/Company.js'

export const getCompany = async (req, res, next) => {
  try {
    const companyId = req.params.id
    const company = await Company.findById(companyId)
    if (!company) {
      throw { message: 'Company not found', statusCode: 404 }
    }

    res.status(200).json(company)
  } catch (err) {
    next(err)
  }
}
