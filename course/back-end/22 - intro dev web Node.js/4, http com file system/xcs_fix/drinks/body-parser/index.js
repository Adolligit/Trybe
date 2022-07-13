const express = require('express');
const bodyParse = require('body-parser');

const PORT = 3000;
const ENDPOINT = '/drinks';

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const app = express();
app.use(bodyParse.json());

app.get(ENDPOINT, (_req, res) => res.status(200).json(drinks));

app.post(ENDPOINT, (req, res) => {
  const { id, name, price } = req.body;

  drinks.push({ id, name, price });

  res.status(201).json({ message: 'Foi adicionado a nova bebida!' });
});

app.listen(PORT);
