const express = require('express');
const { createContactMessage } = require('../controllers/contactController');
const router = express.Router();

// Ruta za slanje kontakt poruka
router.post('/', createContactMessage);

module.exports = router;
