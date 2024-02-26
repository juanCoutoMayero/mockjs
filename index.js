

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');  // For generating auth tokens
const http = require('http');

const app = express();
const port = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Replace this with your actual user authentication logic
const authenticateUser = (username, password) => {
    // Perform user validation here, e.g., check against a database
    // For demonstration, assume a hardcoded user
    return username === 'demouser' && password === 'password123';
};

// Route for login
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    if (authenticateUser(username, password)) {
        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ auth_token: token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});