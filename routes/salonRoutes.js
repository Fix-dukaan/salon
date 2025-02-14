const express = require('express');
const { getAllSalons } = require('../controllers/salonController');
const { body, validationResult } = require('express-validator');
const Salon = require('../models/Salon');

const router = express.Router();

router.get('/', getAllSalons);

router.post(
  '/bulk',
  [
    body('*.name').notEmpty().withMessage('Salon name is required'),
    body('*.address').notEmpty().withMessage('Address is required'),
    body('*.services').isArray().withMessage('Services must be an array'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salons = await Salon.insertMany(req.body);
      res.status(201).json({ message: 'Salons added successfully', salons });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
