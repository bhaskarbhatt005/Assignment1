const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the main page
app.get('/', (req, res) => {
    res.render('index');
});

// Handle Contact Form Submission
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    res.render('result', { type: 'Contact', data: { name, email, message } });
});

// Handle Feedback Form Submission
app.post('/submit-feedback', (req, res) => {
    const { feedback } = req.body;
    console.log('Feedback Form Submission:', { feedback });
    res.render('result', { type: 'Feedback', data: { feedback } });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
