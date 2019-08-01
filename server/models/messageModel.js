const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  partyOne: {type: String, required: true},
  partyTwo: {type: String, required: true},
  messages: [
    {
      author: String,
      message: String,
      created: Date
    }
  ]
});

module.exports = mongoose.model('Message', messageSchema);