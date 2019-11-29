'use strict';

const express = require('express');

var cors = require("cors");
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Express\n');
});

app.get('/register', (req, res) => {
  res.send('Testing Registration')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);