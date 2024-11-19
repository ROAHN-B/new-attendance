const pool = require('../config/db');

exports.markAttendance = async (req, res) => {
    const { email, student_name, status } = req.body; // Get data from the request body

    try {
        // Save attendance record to the database
        const result = await pool.query(
            'INSERT INTO attendance (email, student_name, status) VALUES ($1, $2, $3) RETURNING *',
            [email, student_name, status]
        );

        res.status(200).json({ message: 'Attendance marked successfully!', record: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Error marking attendance', error });
    }
};