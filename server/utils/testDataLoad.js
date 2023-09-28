/* USED FOR ONE-TIME DATA LOAD */
import User from '../models/User.js'
import Company from '../models/Company.js'
import Institution from '../models/Institution.js'
import Occupation from '../models/Occupation.js'
import Education from '../models/Education.js'
import JobOffer from '../models/JobOffer.js'
import WhatsappGroup from '../models/WhatsappGroup.js'
import { users, companies, institutions, occupations, educations, jobs, whatsappGroups } from './data/index.js'

const loadData = async () => {
  await User.insertMany(users)
  await Company.insertMany(companies)
  await Institution.insertMany(institutions)
  await Occupation.insertMany(occupations)
  await Education.insertMany(educations)
  await JobOffer.insertMany(jobs)
  await WhatsappGroup.insertMany(whatsappGroups)
}

export default loadData
