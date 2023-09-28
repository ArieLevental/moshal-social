import mongoose from 'mongoose'
import { validateUser, validateLink } from '../utils/validators.js'

const whatsappGroupSchema = mongoose.Schema(
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
    link: {
      type: String,
      required: [true, 'Link is required.'],
      minlength: [2, 'Link should be at least 2 characters.'],
      maxlength: [100, 'Link should not exceed 100 characters.'],
      validate: {
        validator: validateLink,
        message: 'Invalid link value'
      }
    },
    name: {
      type: String,
      required: [true, 'Name is required.'],
      minlength: [2, 'Name should be at least 2 characters.'],
      maxlength: [50, 'Name should not exceed 50 characters.'],
      index: true
    },
    tags: [
      {
        type: String,
        minlength: [2, 'Tag should be at least 2 characters.'],
        maxlength: [20, 'Tag should not exceed 20 characters.']
      }
    ]
  },
  { timestamps: true }
)

const WhatsappGroup = mongoose.model('WhatsappGroup', whatsappGroupSchema)

export default WhatsappGroup
