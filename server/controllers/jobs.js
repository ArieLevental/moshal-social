import JobOffer from '../models/JobOffer.js'

export const getJobOffers = async (req, res, next) => {
  try {
    // Get all job offers sorted by descending order of updatedAt
    const jobs = await JobOffer.find().sort({ updatedAt: -1 }).populate('companyId').populate('userId')
    if (!jobs) {
      throw { message: 'Jobs not found', statusCode: 404 }
    }

    res.status(200).json(jobs)
  } catch (err) {
    next(err)
  }
}

export const newJobOffer = async (req, res, next) => {
  try {
    const { userId, companyId, content, offerTitle, offerLink, location, expReq, referral } = req.body

    const newJobOffer = new JobOffer({
      userId,
      companyId,
      content,
      offerTitle,
      offerLink,
      location,
      expReq,
      referral
    })
    const savedJobOffer = await newJobOffer.save()
    await savedJobOffer.populate('companyId')

    res.status(201).json(savedJobOffer)
  } catch (err) {
    next(err)
  }
}
