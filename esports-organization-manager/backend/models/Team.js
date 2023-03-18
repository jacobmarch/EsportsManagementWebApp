const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  logo: { type: String, required: false },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
