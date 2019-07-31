const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  partyOne: {type: String, required: true},
  partyTwo: {type: String, required: true},
  messages: [
    {
      author: {type: String, required: true},
      message: {type: String, required: true},
      created: {type: Date, default: Date.now}
    }
  ]
});

module.exports = mongoose.model('Message', messageSchema);