const User = require('../models/User')


const signupGetController = async (req, res, next) => {
    try {
        const user = await User.find().select('email username')
        if(!user){
            return res.status(200).json(user)
        }
        res.status(200).json(user)
    } catch (e) {
        res.status(500)
    }
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