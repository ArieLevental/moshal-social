import express from 'express'
import { getInstitution } from '../controllers/institution.js'
import { verifyToken } from '../middleware/auth.js'

const institutionRouter = express.Router()

institutionRouter.route('/:id').get(verifyToken, getInstitution)

export default institutionRouter
