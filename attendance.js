const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Route to mark attendance
router.post('/mark-attendance', attendanceController.markAttendance);

module.exports = router;