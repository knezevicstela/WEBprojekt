const express = require('express');
const { getOffers, createOffer } = require('../controllers/offerController');
const router = express.Router();

router.get('/offers', getOffers);
router.post('/offers', createOffer);

module.exports = router;
