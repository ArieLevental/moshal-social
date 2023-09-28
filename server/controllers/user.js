import User from '../models/User.js'
import Institution from '../models/Institution.js'
import Education from '../models/Education.js'
import Company from '../models/Company.js'
import Occupation from '../models/Occupation.js'

export const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId).select('-password')

    if (!user) {
      throw { message: 'Failed to get user', statusCode: 404 }
    }

    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const updatedData = req.body

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
      runValidators: true
    })

    if (!updatedUser) {
      throw { message: 'Failed to update user', statusCode: 404 }
    }

    // TODO: need to generalize this logic
    updatedUser.password = undefined
    delete updatedUser.password

    res.status(200).json({ user: updatedUser })
  } catch (err) {
    next(err)
  }
}

export const addEducationItem = async (req, res, next) => {
  try {
    const userId = req.params.id
    const { organizationId: institutionId, startYear, endYear, degree } = req.body // Assuming the request body contains the updated data
    const newEducation = new Education({
      userId,
      institutionId,
      startYear,
      endYear,
      degree
    })
    const savedEducation = await newEducation.save()

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { education: savedEducation._id } },
      {
        new: true,
        runValidators: true // This option runs the validation on the updated data
      }
    )

    if (!updatedUser) {
      throw { message: 'Failed to update user', statusCode: 404 }
    }

    // Update user data
    const updatedInstitution = await Institution.findByIdAndUpdate(
      institutionId,
      { $push: { students: userId } },
      {
        new: true, // This option returns the updated document
        runValidators: true // This option runs the validation on the updated data
      }
    )

    if (!updatedInstitution) {
      throw { message: 'Failed to update institution', statusCode: 404 }
    }
    await savedEducation.populate('institutionId')

    res.status(200).json({
      user: updatedUser,
      newItem: savedEducation
    })
  } catch (err) {
    next(err)
  }
}

export const getEducationItems = async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)
    const educationItems = await Education.find({
      _id: { $in: user.education }
    }).populate('institutionId')

    res.status(200).json(educationItems)
  } catch (err) {
    next(err)
  }
}

export const deleteEducationItem = async (req, res, next) => {
  try {
    const userId = req.params.id
    const { educationId, institutionId } = req.body // Assuming the request body contains the updated data
    console.log(educationId, institutionId)

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { education: educationId } },
      {
        new: true, // This option returns the updated document
        runValidators: true // This option runs the validation on the updated data
      }
    )

    if (!updatedUser) {
      throw { message: 'Find and update user failed', statusCode: 404 }
    }

    // TODO - double request to the DB, can be optimized
    const user = await User.findById(userId)
    // Loop through the user's education items and check if the there is an institutionId matching
    // the newly removed education item
    // If there is no other education item with the same institutionId, remove the user from the institution's students list
    let shouldRemove = false
    user.education.forEach((educationId) => {
      if (educationId.institutionId === institutionId) {
        shouldRemove = true
        return
      }
    })

    // Update user data
    if (shouldRemove) {
      const updatedInstitution = await Institution.findByIdAndUpdate(
        institutionId,
        { $pull: { students: userId } },
        {
          new: true, // This option returns the updated document
          runValidators: true // This option runs the validation on the updated data
        }
      )

      if (!updatedInstitution) {
        throw {
          message: 'Find and update institution failed',
          statusCode: 404
        }
      }
    }

    res.status(200).json({ user: updatedUser })
  } catch (err) {
    next(err)
  }
}

export const addOccupationItem = async (req, res, next) => {
  try {
    const userId = req.params.id
    const { organizationId: companyId, startYear, endYear, position } = req.body // Assuming the request body contains the updated data
    const newOccupation = new Occupation({
      userId,
      companyId,
      startYear,
      endYear,
      position
    })
    const savedOccupation = await newOccupation.save()

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { occupation: savedOccupation._id } },
      {
        new: true, // This option returns the updated document
        runValidators: true // This option runs the validation on the updated data
      }
    )

    if (!updatedUser) {
      throw { message: 'Find and update user failed', statusCode: 404 }
    }

    // Update user data
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      { $push: { employees: userId } },
      {
        new: true, // This option returns the updated document
        runValidators: true // This option runs the validation on the updated data
      }
    )

    if (!updatedCompany) {
      throw { message: 'Find and update company failed', statusCode: 404 }
    }

    await savedOccupation.populate('companyId')
    res.status(200).json({
      user: updatedUser,
      newItem: savedOccupation
    })
  } catch (err) {
    next(err)
  }
}

export const getOccupationItems = async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)
    const occupationItems = await Occupation.find({
      _id: { $in: user.occupation }
    }).populate('companyId')

    res.status(200).json(occupationItems)
  } catch (err) {
    next(err)
  }
}

export const deleteOccupationItem = async (req, res, next) => {
  try {
    const userId = req.params.id
    const { occupationId, companyId } = req.body // Assuming the request body contains the updated data

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { occupation: occupationId } },
      {
        new: true, // This option returns the updated document
        runValidators: true // This option runs the validation on the updated data
      }
    )

    if (!updatedUser) {
      throw { message: 'Find and update user failed', statusCode: 404 }
    }

    // TODO - double request to the DB, can be optimized
    const user = await User.findById(userId)
    // Loop through the user's education items and check if the there is an institutionId matching
    // the newly removed education item
    // If there is no other education item with the same institutionId, remove the user from the institution's students list
    let shouldRemove = false
    user.occupation.forEach((occupationId) => {
      if (occupationId.companyId === companyId) {
        shouldRemove = true
        return
      }
    })

    // Update user data
    if (shouldRemove) {
      const updatedCompany = await Company.findByIdAndUpdate(
        companyId,
        { $pull: { employees: userId } },
        {
          new: true, // This option returns the updated document
          runValidators: true // This option runs the validation on the updated data
        }
      )

      if (!updatedCompany) {
        throw { message: 'Find and update company failed', statusCode: 404 }
      }
    }

    res.status(200).json({
      user: updatedUser
    })
  } catch (err) {
    next(err)
  }
}
