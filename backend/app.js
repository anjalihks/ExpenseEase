const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Routes
app.use('/', require('./routes/messageRoutes'));

// ... rest of your server code 