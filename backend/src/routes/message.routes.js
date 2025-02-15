const express = require('express');
const router = express.Router();
const { createMessage, getMessages } = require('../controllers/message.controller');

router.post('/', createMessage);
router.get('/', getMessages);

module.exports = router; 