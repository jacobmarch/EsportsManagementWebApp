const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  teamID: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;