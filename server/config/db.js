// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Učitajte varijable okruženja

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; // Preuzmite URI iz varijable okruženja
        if (!uri) {
            throw new Error('MONGO_URI nije definirana.');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Uspješno povezano na MongoDB!');
    } catch (error) {
        console.error('Greška pri povezivanju na MongoDB:', error);
        process.exit(1); // Izlaz iz procesa u slučaju greške
    }
};

module.exports = connectDB;
