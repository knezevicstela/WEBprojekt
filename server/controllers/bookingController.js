const Booking = require('../models/Booking');

// Kreiranje nove rezervacije
exports.createBooking = async (req, res) => {
  const { mail, date, service } = req.body;

  try {
    const newBooking = new Booking({
      mail,
      date,
      service
    });

    await newBooking.save();

    res.status(201).json({ success: true, booking: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Greška pri kreiranju rezervacije.', error });
  }
};

// Dohvaćanje rezervacija za prijavljenog korisnika
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Greška pri dohvaćanju rezervacija.', error });
  }
};
