import express from 'express'

import authRouter from './auth.js'
import companiesRouter from './companies.js'
import companyRouter from './company.js'
import institutionRouter from './institution.js'
import institutionsRouter from './institutions.js'
import jobsRouter from './jobs.js'
import storageRouter from './storage.js'
import userRouter from './user.js'
import usersRouter from './users.js'
import whatsappGroupRouter from './whatsappGroup.js'

import errorHandler from '../middleware/errorHandler.js'

const apiRouter = express.Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/user', userRouter)
apiRouter.use('/users', usersRouter)
apiRouter.use('/storage', storageRouter)
apiRouter.use('/institution', institutionRouter)
apiRouter.use('/institutions', institutionsRouter)
apiRouter.use('/jobs', jobsRouter)
apiRouter.use('/company', companyRouter)
apiRouter.use('/companies', companiesRouter)
apiRouter.use('/whatsapp', whatsappGroupRouter)

apiRouter.use(errorHandler)

export default apiRouter
