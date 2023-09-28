import Institution from '../models/Institution.js'

export const getInstitution = async (req, res, next) => {
  try {
    const institutionId = req.params.id
    const institution = await Institution.findById(institutionId)
    if (!institution) {
      throw { message: 'Institution not found', statusCode: 404 }
    }

    res.status(200).json(institution)
  } catch (err) {
    next(err)
  }
}
