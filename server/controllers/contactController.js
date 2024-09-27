const Contact = require('../models/Contact');

// Funkcija za spremanje kontakt poruka u MongoDB
exports.createContactMessage = async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      number,
      message
    });

    await newContact.save();
    res.status(201).json({ success: true, message: 'Poruka uspješno poslana!' });
  } catch (error) {
    console.error('Greška pri slanju poruke:', error);
    res.status(500).json({ success: false, message: 'Greška pri slanju poruke.', error });
  }
};
