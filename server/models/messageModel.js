const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  partyOne: {type: String, required: true, unique: false},
  partyTwo: {type: String, required: true, unique: false},
  messages: [
    {
      author: String,
      message: String,
      created: Date
    }
  ]
});

messageSchema.index({partyOne: 1, partyTwo: 1}, {unique: true});

module.exports = mongoose.model('Message', messageSchema);