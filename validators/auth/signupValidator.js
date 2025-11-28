const { body } = require("express-validator");
const User = require("../../models/User");



const signupValidator = [

  body("username")
    .isLength({ min: 3, max: 10 })
    .withMessage(`username must be between 3 to 10 characters`)
    .custom(async (username) => {
      let user = await User.findOne({ username });

      if (user) {
        return Promise.reject("Username already taken");
      }
    })
    .trim(),

  body("email")
    .isEmail()
    .withMessage(`Please provide a valid Email`)
    .custom(async (email) => {
      let user = await User.findOne({ email });

      if (user) {
        return Promise.reject("Email already taken");
      }
    })
    .normalizeEmail(),
    
  body("password")
    .isLength({ min: 5 })
    .withMessage(`Password must be greater then 5 chars`),
];


module.exports = signupValidator