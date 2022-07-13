const express = require('express');

const app = express();

const endpoint = '/drinks';

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get(endpoint, (req, res) => {
  res.status(200).json(drinks)
});

app.get(`${endpoint}/search`, (req, res) => {
  const { name } = req.query;
  const drink = find((drink) => drink.name === name);

  return (drink) 
    ? res.status(200).json(drink)
    : res.status(404).send({ messsage: "drink's not found!" });
});

app.listen(3000, () => console.log('3000p^'));