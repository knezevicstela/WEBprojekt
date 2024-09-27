const Offer = require('../models/Offer');

// Dohvati sve ponude
exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Greška pri dohvaćanju ponuda.', error });
  }
};

// Kreiraj novu ponudu
exports.createOffer = async (req, res) => {
  const { date, offer } = req.body;
  try {
    const newOffer = new Offer({ date, offer });
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Greška pri kreiranju ponude.', error });
  }
};
