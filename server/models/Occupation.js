import mongoose from 'mongoose'
import { validateUser, validateCompany, validateEndYear } from '../utils/validators.js'

const currentYear = new Date().getFullYear()
const MIN_START_YEAR = 1990
const MAX_START_YEAR = currentYear + 1
const MAX_END_YEAR = currentYear + 10

const occupationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required.'],
      validate: {
        validator: validateUser,
        message: 'Invalid userId.'
      }
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: [true, 'Company ID is required.'],
      validate: {
        validator: validateCompany,
        message: 'Invalid companyId.'
      }
    },
    position: {
      type: String,
      required: [true, 'Position is required.']
    },
    startYear: {
      type: Number,
      min: [MIN_START_YEAR, `Start year must be greater than or equal to ${MIN_START_YEAR}.`],
      max: [MAX_START_YEAR, `Start year cannot exceed ${MAX_START_YEAR}.`],
      default: MIN_START_YEAR
    },
    endYear: {
      type: Number,
      validate: {
        validator: validateEndYear,
        message: 'End year must be greater than or equal to start year.'
      },
      max: [MAX_START_YEAR, `End year cannot exceed ${MAX_START_YEAR}.`]
    }
  },
  { timestamps: true }
)

const Occupation = mongoose.model('Occupation', occupationSchema)

export default Occupation
