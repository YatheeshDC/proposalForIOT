// // server/routes/auth.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // Register Route
// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ username, password: hashedPassword });
//   await newUser.save();
//   res.status(201).send('User Registered');
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(400).send('Invalid Credentials');
//   }
// });

// module.exports = router;

// server/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log('Request body:', req.body); // Add this line
  try {
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User Registered');
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).send('Server Error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(400).send('Invalid Credentials');
    }
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
