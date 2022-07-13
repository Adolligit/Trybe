const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

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

app.listen(PORT, () => console.log(PORT, '^'));

app.get(ENDPOINT, (_req, res) => res.status(200).json(drinks));

app.get(`${ENDPOINT}/:id`, (req, res) => {
  const { id } = req.params;
  const foundDrink = drinks.find((drink) => drink.id === +id);
  
  if (!foundDrink) return res.status(404).json({ message: 'Drink\'s not found!' });
  
  res.status(200).json(foundDrink);
});


app.put(`${ENDPOINT}/:id`, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const foundIndex = drinks.findIndex((drink) => drink.id === +id);
  
  if (foundIndex === -1) return res.status(404).json({ message: 'Drink\'s not found!' });
  
  drinks[foundIndex] = { ...drinks[foundIndex], name, price };
  
  
  res.status(204).end();
});

app.delete(`${ENDPOINT}/:id`, (req, res) => {
  const { id } = req.params;
  const foundIndex = drinks.findIndex((drink) => drink.id === +id);
  
  if (foundIndex === -1) return res.status(404).json({ message: 'Drink\'s not found!' });

  drinks.splice(foundIndex, 1);
  res.status(204).end();
});

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));