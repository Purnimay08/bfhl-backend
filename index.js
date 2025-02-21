const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000; // ✅ Use Render's port

app.use(cors());
app.use(express.json());

// Function to categorize data
function categorizeData(data) {
    let numbers = [];
    let alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
        }
    });

    let highest_alphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => a.localeCompare(b)).pop()] : [];

    return { numbers, alphabets, highest_alphabet };
}

// POST endpoint: /bfhl
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    if (!Array.isArray(data)) {
        return res.status(400).json({ error: 'Invalid data format. Expected an array.' });
    }

    const { numbers, alphabets, highest_alphabet } = categorizeData(data);

    res.json({
        is_success: true,
        user_id: "purnima_08032005",
        email: "purnimay2005@gmail.com",
        roll_number: "22BCS12030",
        numbers,
        alphabets,
        highest_alphabet
    });
});

// GET endpoint: /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
