const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
  res.send({ name: 'Óli' });
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
