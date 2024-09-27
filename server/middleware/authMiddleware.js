const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Preuzmi token iz header-a
      token = req.headers.authorization.split(' ')[1];

      // Dekodiraj token i provjeri korisnika
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');  // Bez lozinke

      next();
    } catch (error) {
      res.status(401).json({ message: 'Niste autorizirani' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Token nije pronađen' });
  }
};

module.exports = protect;
