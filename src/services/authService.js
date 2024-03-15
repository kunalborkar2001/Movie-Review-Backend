const jwt = require("jsonwebtoken")
const User = require('../models/User')
const bcrypt = require("bcryptjs")

const register = async (userData) => {
    const { username, email, password } = userData
    try {
        const existingUser = await User.findOne({ username: username })
        const existingEmail = await User.findOne({ email: email })
        if (existingUser) {

            throw new Error("Username already exists")
        }
        else if (existingEmail) {
            throw new Error("Email already exists")
        }

        const user = new User(userData) //This is just creating an object 

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        user.password = hashedPassword

        await user.save()
        return user

    } catch (error) {

        throw error
    }
}

const login = async (userData) => {
    const { email, password } = userData

    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            throw new Error(`No User with ${email}`)
        }

        const passwordCheck = await user.comparePassword(password)

        if (!passwordCheck) {
            throw new Error("Incorrect Password")
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        return { token, user }

    } catch (error) {
        throw error
    }
}

module.exports = { register, login }