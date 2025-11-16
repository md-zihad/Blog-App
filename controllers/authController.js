const User = require('../models/User')


const signupGetController = (req, res, next) => {
    
}
const signupPostController = async (req, res, next) => {
    const {username, email, password} = req.body
    // console.log(req.body)
    const newUser = new User({
        username,
        email,
        password
    })

    try {
        let createdUser = await newUser.save()
         res.status(201).json(createdUser)
    } catch (e) {
        return res.status(404).json('Error Occured')
    }
}
const loginGetController = (req, res, next) => {

}
const loginPostController = (req, res, next) => {

}
const logoutController = (req, res, next) => {

}

module.exports = {
    signupGetController, signupPostController, loginGetController, loginPostController, logoutController
}