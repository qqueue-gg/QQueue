const User = require('../models/userModel.js');

module.exports = userController = {
  // add middleware to interact with database
  addUser: (req, res, next) => {
    User.create({
      ...req.body
    }, (err, user) => {
      if(err) return next(err);

      res.locals.user = user;

      return next();
    });
  },

  getUsers: (req, res, next) => {
    User.find({}, (err, obj) => {
      if(err) return next(err);

      return res.status(200).json(obj);
    });
  },

  editUser: (req, res, next) => {
    User.findOneAndUpdate({ _id: req.body._id }, { $set: {...req.body} }, { new: true }, (err, updated) => {
      if(err) return next(err);
      return next();
    });
  },

  deleteUser: (req, res, next) => {
    User.findOneAndDelete({ _id: req.body._id }, (err, obj) => {
      if(err) return next(err);

      return next();
    });
  }
};