const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Function to categorize data into numbers, alphabets, and highest alphabet
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

    // Find highest alphabet (lexicographically)
    let highest_alphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => a.localeCompare(b)).pop()] : [];

    return {
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet
    };
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
        user_id: "purnima_08032005",  // Replace with your details
        email: "purnimay2005@gmail.com",
        roll_number: "22BCS12030",    // Replace with your roll number
        numbers,
        alphabets,
        highest_alphabet
    });
});

// GET endpoint: /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
