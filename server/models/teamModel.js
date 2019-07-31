const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: {type: String, required: true},
  teamMates: [{name: String}],
  email: {type: String, required: true},
  logo: String,
  motto: String,
  accolades: [{accolade: String}],
  bio: String,
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Team', teamSchema);