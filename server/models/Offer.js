const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  date: { type: String, required: true },
  offer: { type: String, required: true },
});

module.exports = mongoose.model('Offer', OfferSchema);
