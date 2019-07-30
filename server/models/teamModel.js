const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: String,
  teamMates: [{name: String}],
  email: String,
  logo: String,
  motto: String,
  accolades: [{accolade: String}],
  bio: String,
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Team', teamSchema);