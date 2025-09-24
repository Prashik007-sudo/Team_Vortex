const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dash.html'));
});

// Route for EMI Plan page
app.get('/emiplan.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'emiplan.html'));
});

// Route for Take Loan page
app.get('/takeloan.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'takeloan.html'));
});

// Route for Finance page
app.get('/finance.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'finance.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});