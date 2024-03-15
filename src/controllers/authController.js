const authService = require('../services/authService')

const register = async (req, res) => {

    try {
        const userData = req.body
        const user = await authService.register(userData)

        res.status(201).json({
            messge: "User Registered Successfully",
            userId: user._id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const userData = req.body

        const { token, user } = await authService.login(userData)

        res.status(200).json({
            user,
            token,
            messge: "User Login Successful"
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = { register, login }