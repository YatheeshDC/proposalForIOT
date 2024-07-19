// server/routes/washroom.js
const express = require('express');
const Washroom = require('../models/Washroom');

const router = express.Router();

// Get all washrooms
router.get('/', async (req, res) => {
  const washrooms = await Washroom.find();
  res.json(washrooms);
});

// Update washroom status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  await Washroom.findByIdAndUpdate(req.params.id, { status });
  res.send('Washroom status updated');
});

module.exports = router;
