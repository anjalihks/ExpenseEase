require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route imports
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const investmentRoutes = require('./routes/investment.routes');
const messageRoutes = require('./routes/message.routes');
const paymentRoutes = require('./routes/payment.routes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Debug middleware to log all incoming requests
app.use((req, res, next) => {
  console.log('Incoming request:', {
    method: req.method,
    path: req.path,
    body: req.body
  });
  next();
});

try {
  // Log the absolute path
  console.log('Current directory:', __dirname);
  
  // Import routes with absolute path
  const authRoutes = require(path.join(__dirname, 'routes', 'auth.routes'));
  console.log('Auth routes imported successfully');
  
  // Use routes
  app.use('/api/users', authRoutes);
  console.log('Routes mounted successfully');
} catch (error) {
  console.error('Error loading routes:', error);
}

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/payments', paymentRoutes);

// Test route to verify server is working
app.get('/', (req, res) => {
  res.json({ 
    message: 'Server is running',
    routes: 'If you see this, the server is working but routes might not be loaded'
  });
});

// Error handling for undefined routes
app.use((req, res) => {
  console.log('404 hit for path:', req.path);
  res.status(404).json({ message: `Route ${req.path} not found` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test the server at http://localhost:${PORT}`);
  console.log(`Auth routes should be at http://localhost:${PORT}/api/users/test`);
}); 