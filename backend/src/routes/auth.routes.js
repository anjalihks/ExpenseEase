const express = require('express');
const { register, login, signup } = require('../controllers/auth.controller');

const router = express.Router();

// Log when routes are loaded
console.log('Auth routes loading...');

// Test route to verify router is working
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes working' });
});

// Debug log
console.log('Auth routes loaded');

router.post('/register', register);
router.post('/login', login);
router.post('/signup', signup);

module.exports = router; 