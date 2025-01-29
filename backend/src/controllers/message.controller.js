const Message = require('../models/message.model');

const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newMessage = new Message({
      name,
      email,
      message
    });

    await newMessage.save();

    // Here you could add email notification logic
    // For example, using nodemailer to send an email to your admin email

    res.status(201).json({ 
      message: 'Message sent successfully',
      data: newMessage 
    });
  } catch (error) {
    console.error('Message error:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ message: 'Error retrieving messages' });
  }
};

module.exports = {
  createMessage,
  getMessages
}; 