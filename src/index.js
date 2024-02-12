// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Creating an instance of Express
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// GET route
app.get('/', (req, res) => {
  res.send('This is a GET request');
});

// POST route
app.post('/', (req, res) => {
  const data = req.body;
  res.send(`This is a POST request with data: ${JSON.stringify(data)}`);
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
