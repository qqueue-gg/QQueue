const Message = require('../models/messageMOdel.js');

module.exports = messageController = {
  getMessengerList: (req, res, next) => {
    Message.find({
      partyOne: req.body.partyOne,
      partyTwo: req.body.partyTwo
    }, (err, obj) => {
      if(err) return next(err);

      return res.status(200).json(obj);
    });
  },
  addMessage: (req, res, next) => {
    Message.create({
      ...req.body
    }, (err, message) => {
      if(err) return next(err);

      res.locals.message = message;

      return next();
    });
  },
  updateMessage: (req, res, next) => {
    Message.findOneAndUpdate({ 
      partyOne: req.body.partyOne, 
      partyTwo: req.body.partyTwo 
    }, { $set: {...req.body} }, { new: true }, (err, updated) => {
      if(err) return next(err);

      Message.findOneAndUpdate({ 
        partyOne: req.body.partyTwo, 
        partyTwo: req.body.partyOne 
      }, { $set: {...req.body} }, { new: true }, (err, updated) => {
        if(err) return next(err);
        return next();
      });
    });
  }
};