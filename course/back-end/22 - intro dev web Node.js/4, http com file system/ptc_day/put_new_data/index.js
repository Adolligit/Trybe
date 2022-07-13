const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const ENDPOINT = '/recipes';

const arr = [];

app.post(ENDPOINT, (req, res) => {
  const data = req.body;
  
  arr.push(data);
  res.status(201).json(arr);
});

app.listen(PORT, () => console.log(`${PORT}^`))
