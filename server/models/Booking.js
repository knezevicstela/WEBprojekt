const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  mail: { type: String, required: true },  
  date: { type: String, required: true },  // Datum rezervacije
  service: { type: String, required: true }
});

module.exports = mongoose.model('Booking', BookingSchema);
