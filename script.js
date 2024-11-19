document.getElementById('attendanceForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const email = document.getElementById('email').value;
    const studentName = document.getElementById('studentName').value;
    const status = document.getElementById('status').value;

    // Prepare the data to be sent to the server
    const attendanceData = {
        email: email,
        student_name: studentName,
        status: status,
    };

    try {
        const response = await fetch('http://localhost:3000/api/mark-attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendanceData),
        });

        const data = await response.json();
        document.getElementById('responseMessage').innerText = data.message;
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'Error marking attendance';
    }
});