const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Delete a message
router.delete('/api/messages/:id', async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Error deleting message' });
  }
});

// ... existing routes ...

module.exports = router; 