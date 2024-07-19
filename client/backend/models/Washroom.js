// server/models/Washroom.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WashroomSchema = new Schema({
  status: { type: String, required: true, enum: ['Occupied', 'Empty', 'Cleaning in Progress'] },
  lastCleaned: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Washroom', WashroomSchema);
