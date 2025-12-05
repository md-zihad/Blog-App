const User = require("../models/User");

const bindUserReq = () => {
  return async (req, res, next) => { 
    if (!req.session.isLoggedIn) {
      return next();
    }

    try {
      const user = await User.findOne(req.session.user._id);
      req.user = user;
      next()
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

const isAuthenticated = (req, res, next) => {
    if(!req.session.isLoggedIn){
        return res.status(403).json('Please log in first')
    }
    next()
}

module.exports = {bindUserReq, isAuthenticated} ;
