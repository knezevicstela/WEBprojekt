require('dotenv').config({path: __dirname + '/.env'});
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Inicijalizacija aplikacije
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Spajanje na MongoDB
connectDB();

// Posluži statičke datoteke iz "client" direktorija
app.use(express.static(path.join(__dirname, '../client')));

// Rute za API
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));  // Učitavanje kontakt ruta
app.use('/api/users', require('./routes/userRoutes'));

// Ruta za prikaz homepage.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/homepage.html'));  // Put do HTML datoteke
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
