const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  continent: String,
  description: String,
  currency: String,
});

const City = mongoose.model('City', citySchema);

module.exports = City;