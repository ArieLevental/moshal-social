import express from 'express'
import { getAllCompanies } from '../controllers/companies.js'
import { verifyToken } from '../middleware/auth.js'

const companiesRouter = express.Router()

companiesRouter.route('/').get(verifyToken, getAllCompanies)

export default companiesRouter
