const User = require("../models/User");

const bindUserReq = () => {
  return async (req, res, next) => { 
    if (!req.sessions.isLoggedIn) {
      return next();
    }

    try {
      const user = await User.findOne(req.sessions.user._id);
      req.user = user;
      next()
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

module.exports = bindUserReq ;
