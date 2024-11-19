const express = require('express');
const bodyParser = require('body-parser');
const attendanceRoutes = require('./routes/attendance');
const pool = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', attendanceRoutes); // Use the attendance routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});