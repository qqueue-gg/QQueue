const User = require('../models/userModel.js');

module.exports = {
  // TODO: make it work with either username or password
  verifyUser: function(req, res, next) {
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, result) => {
      if (err) return next(err);
      if (result) res.locals.userInfo = result;
      else res.locals.userInfo = false;
      next();
    })
  },
  checkCookies: function(req, res, next) {

  }
};
