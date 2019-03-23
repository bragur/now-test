const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send({ name: 'Óli' });
});

app.use('*', (req, res) => {
  res.send("What's up?");
});

module.exports = app;
