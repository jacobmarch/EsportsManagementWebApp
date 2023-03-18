const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, enum: ['Coach', 'Player', 'Manager'], required: true },
  phoneNumber: { type: String, required: true },
  team: { type: String, required: true },
  username: { type: String, required: true },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
