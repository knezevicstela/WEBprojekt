const express = require('express');
const { createBooking, getUserBookings } = require('../controllers/bookingController');
const router = express.Router();

// Kreiranje nove rezervacije (bez autentifikacije)
router.post('/', createBooking);

// Dohvaćanje rezervacija za prijavljenog korisnika (zahtijeva autentifikaciju)
router.get('/', getUserBookings);

module.exports = router;
