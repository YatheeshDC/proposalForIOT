const mongoose = require('mongoose');

const BathroomSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  cleaningStatus: {
    type: String,
    default: 'Not Cleaned',
  },
  cleaningStartTime: {
    type: Date,
  },
});
module.exports = mongoose.model('bathroom', BathroomSchema);
