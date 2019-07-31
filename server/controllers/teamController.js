const Team = require('../models/teamModel.js');

module.exports = teamController = {
  // add middleware to interact with database
  addTeam: (req, res, next) => {
    Team.create({
      ...req.body
    }, (err, team) => {
      if(err) return next(err);

      res.locals.user = team;

      return next();
    });
  },

  getTeams: (req, res, next) => {
    Team.find({}, (err, obj) => {
      if(err) return next(err);

      return res.status(200).json(obj);
    });
  },

  editTeam: (req, res, next) => {
    Team.findOneAndUpdate({ _id: req.body._id }, { $set: {...req.body} }, { new: true }, (err, updated) => {
      if(err) return next(err);
      return next();
    });
  },

  deleteTeam: (req, res, next) => {
    Team.findOneAndDelete({ _id: req.body._id }, (err, obj) => {
      if(err) return next(err);

      return next();
    });
  }
};