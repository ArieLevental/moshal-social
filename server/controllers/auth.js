import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      phoneNumber
    })
    const savedUser = await newUser.save()

    res.status(201).json(savedUser)
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      throw { message: 'Invalid credentials', statusCode: 401 }
    }

    // compare passwords
    const isMatching = await bcrypt.compare(password, user.password)
    if (!isMatching) {
      throw { message: 'Invalid credentials', statusCode: 401 }
    }

    // generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })

    user.password = undefined
    delete user.password

    res.status(200).json({ token, user })
  } catch (err) {
    next(err)
  }
}

export const logout = async (req, res, next) => {
  try {
    res.clearCookie('token')

    res.status(200)
  } catch (err) {
    next(err)
  }
}
