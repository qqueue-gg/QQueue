const Message = require('../models/messageModel.js');

module.exports = messageController = {
  getMessengerList: (req, res, next) => {
    console.log('retrieving messages');
    Message.find({
      partyOne: req.body.partyOne,
      // partyTwo: req.body.partyTwo
    }, (err, obj) => {
      if(err) return next(err);

      return res.status(200).json(obj);
    });
  },

  getOurConvo: (req, res, next) => {
    console.log('retrieving messages');
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
    }, { $push: {messages: req.body.messages} }, { new: true }, (err, updated) => {
      if(err) return next('err:', err);

      Message.findOneAndUpdate({ 
        partyOne: req.body.partyTwo, 
        partyTwo: req.body.partyOne 
      }, { $push: {
        messages: req.body.messages
      } }, { new: true }, (err, updated) => {
        if(err) return next('second err: ', err);
        return next();
      });
    });
  },
  updateSocketMessage: (message) => {
    console.log('message: ', JSON.parse(message))
    message = JSON.parse(message);
    console.log('Message in controller middleware: ', message.partyOne, message.messages);
    Message.findOneAndUpdate({ 
      partyOne: message.partyOne, 
      partyTwo: message.partyTwo 
    }, { $push: {messages: message.messages} }, { new: true }, (err, updated) => {
      // if(err) return next('err:', err);
      if(err) throw new Error('Error with database query');
      console.log('first updated: ', updated);
      Message.findOneAndUpdate({ 
        partyOne: message.partyTwo, 
        partyTwo: message.partyOne 
      }, { $push: {
        messages: message.messages
      } }, { new: true }, (err, updated) => {
        // if(err) return next('second err: ', err);
        if(err) throw new Error('Error with database query');
        console.log('second updated: ', updated);
      });
    });
  }
};