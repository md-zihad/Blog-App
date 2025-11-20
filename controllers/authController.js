const User = require("../models/User");
const bcrypt = require("bcrypt");

const signupGetController = async (req, res, next) => {
  try {
    const user = await User.find().select("email username");
    if (!user) {
      return res.status(200).json(user);
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(500);
  }
};
const signupPostController = async (req, res, next) => {
  const { username, email, password } = req.body;
  // console.log(req.body)

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    let createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (e) {
    return res.status(404).json("Error Occured");
  }
};
const loginGetController = (req, res, next) => {};

const loginPostController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      res.json("Invalid Credentials");
    }

    let match = await bcrypt.compare(password, user.password);

    if (!match) {
      res.json("Invalid Credentials");
    }
    res.status(200).json("Welcome, you're logged in");
    //   console.log(user);
  } catch (e) {
    res.status(400).json(e);
  }
};
const logoutController = (req, res, next) => {};

module.exports = {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController,
};
