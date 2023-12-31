import mongoose from 'mongoose'
import { validateEmail, validateLinkedInUrl, validateLink, validatePhoneNumber } from '../utils/validators.js'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required.'],
      minlength: [2, 'First name must be at least 2 characters.'],
      maxlength: [50, 'First name cannot exceed 50 characters.']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.'],
      minlength: [2, 'Last name must be at least 2 characters.'],
      maxlength: [50, 'Last name cannot exceed 50 characters.']
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      minlength: [5, 'Email must be at least 5 characters.'],
      maxlength: [50, 'Email cannot exceed 50 characters.'],
      unique: [true, 'Email is already in use.'],
      index: true,
      validate: {
        validator: validateEmail,
        message: 'Invalid email address format.'
      },
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
      // TODO: handle password validation before the schema, hashing and salting
      // minlength: [5, "Password must be at least 6 characters."],
      // maxlength: [50, "Password cannot exceed 50 characters."],
      // select: false,
    },
    picturePath: {
      type: String,
      default: '',
      validate: {
        validator: validateLink,
        message: 'Invalid picture URL.'
      }
    },
    bannerPath: {
      type: String,
      default: '',
      validate: {
        validator: validateLink,
        message: 'Invalid picture URL.'
      }
    },
    location: {
      type: String,
      maxlength: [20, 'Location cannot exceed 20 characters.'],
      default: ''
    },
    bio: {
      type: String,
      maxlength: [100, 'Bio cannot exceed 200 characters.'],
      default: ''
    },
    dateOfBirth: {
      type: Date,
      default: ''
    },
    phoneNumber: {
      type: String,
      index: {
        unique: true,
        partialFilterExpression: { phoneNumber: { $type: 'string' } }
      },
      validate: {
        validator: validatePhoneNumber,
        message: 'Invalid phone number.'
      },
      default: ''
    },
    linkedIn: {
      type: String,
      validate: {
        validator: validateLinkedInUrl,
        message: 'Invalid LinkedIn profile URL.'
      },
      default: ''
    },
    moshalStatus: {
      type: String,
      enum: {
        values: ['', 'Scholar', 'Alumni', 'Staff'],
        message: 'Invalid moshalStatus value.'
      },
      default: ''
    },
    education: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Education'
      }
    ],
    occupation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Occupation'
      }
    ]
  },
  { timestamps: true }
)

// Define the virtual fullName property
userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

userSchema.set('toJSON', {
  virtuals: true
})

// userSchema.pre("save", function (next) {
//   // Calculate the virtual fullName by combining firstName and lastName
//   this.fullName = `${this.firstName} ${this.lastName}`;
//   next();
// });

// // Index the fullName field for sorting
// userSchema.index({ fullName: 1 });

// Create the User model
const User = mongoose.model('User', userSchema)

export default User
