const express = require('express');
const cors = require('cors');
const api = require('./routers/api');
const path = require('path');
const app = express();

console.log(__dirname);
app.use(express.static(path.join(__dirname, '../../build')));

app.use(cors());
app.use(express.json());
app.use(api);

module.exports = app;
