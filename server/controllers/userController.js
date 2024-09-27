const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generiranje JWT tokena
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Registracija korisnika
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Korisnik već postoji' });
    }

    user = new User({ email, password });
    await user.save();

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: { id: user._id, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri registraciji', error });
  }
};

// Prijava korisnika
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: 'Neispravni podaci za prijavu' });
    }

    res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: { id: user._id, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri prijavi', error });
  }
};
