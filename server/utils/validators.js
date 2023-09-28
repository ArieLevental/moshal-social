import mongoose from 'mongoose'

export const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const linkedInUrlRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]*\/?$/
export const phoneNumberRegex = /^05\d{8}$/

export const validateUser = async (userId) => {
  try {
    const user = await mongoose.model('User').findById(userId)
    if (user === null) {
      console.error('User does not exist.')
      throw new Error('User does not exist.')
    }
    return true
  } catch (error) {
    throw new Error('Error validating user ID: ' + error.message)
  }
}

export const validateLink = (url) => {
  if (!url) return true // Allow empty string
  return urlRegex.test(url)
}

export const validateEmail = (email) => {
  return emailRegex.test(email)
}

export const validateLinkedInUrl = (url) => {
  if (!url) return true // Allow empty string
  return linkedInUrlRegex.test(url)
}

/**
 * Checks if the phone number is valid and unique.
 * in any case, empty string is considered valid.
 * @param {*} phoneNumber
 * @returns true if valid, throws an error otherwise.
 */
export const validatePhoneNumber = async (phoneNumber) => {
  if (phoneNumber === '') {
    return true
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    throw new Error('Invalid phone number.')
  }

  const existingUser = await mongoose.model('User').findOne({ phoneNumber })
  if (existingUser) {
    throw new Error('Phone number is already in use.')
  }

  return true
}

export const validateInstitution = async (institutionName) => {
  try {
    const institution = await mongoose.model('Institution').findById(institutionName)
    return institution !== null
  } catch (error) {
    throw new Error('Error validating institutionId: ' + error.message)
  }
}

export const validateCompany = async (companyName) => {
  try {
    const company = await mongoose.model('Company').findById(companyName)
    return company !== null
  } catch (error) {
    throw new Error('Error validating companyId: ' + error.message)
  }
}

export function validateEndYear(endYear) {
  return endYear >= this.startYear
}
