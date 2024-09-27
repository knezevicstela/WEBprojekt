const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Ruta za registraciju
router.post('/register', registerUser);

// Ruta za prijavu
router.post('/login', loginUser);

module.exports = router;
