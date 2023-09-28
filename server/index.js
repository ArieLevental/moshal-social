import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import apiRouter from './routes/index.js'
// import loadData from "./utils/testDataLoad.js"; // load test data

dotenv.config()

// APP CONFIG
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(express.json({ limit: process.env.DATA_LIMIT, extended: true }))
app.use(express.urlencoded({ limit: process.env.DATA_LIMIT, extended: true }))
app.use(cors())

// ROUTES SETUP
app.use('/api', apiRouter)

// SERVER & MONGOOSE SETUP
const PORT = process.env.PORT || 6001

const connectToDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.error(`${error} did not connect`)
  }
}

const startServer = async () => {
  await connectToDatabase()

  // await loadData(); // load test data
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}

startServer().catch((error) => console.error(error))
