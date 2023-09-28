import express from 'express'
import { getCompany } from '../controllers/company.js'
import { verifyToken } from '../middleware/auth.js'

const companyRouter = express.Router()

companyRouter.route('/:id').get(verifyToken, getCompany)

export default companyRouter
