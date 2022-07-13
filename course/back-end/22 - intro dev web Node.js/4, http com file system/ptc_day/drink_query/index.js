const express = require('express');

const app = express();

const PORT = 3000;
const endpoint = '/drinks';

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get(`${endpoint}`, (_request, response) => response.status(200).json(drinks));

app.get(`${endpoint}/search`, (request, response) => {
	const { name, price } = request.query;
	const found = drinks.filter((drink) => 
		drink.name.toLowerCase().includes(name.toLowerCase()) 
		&& drink.price >= price
	);

	return (found)
	? response.status(200).json(found)
	: response.status(404).json({ message: 'Bebida não encontrada' });
})

app.get(`${endpoint}/:id`, (request, response) => {
  const { id } = request.params;
  const drink = drinks.find((drink) => drink.id === Number(id));

  return (drink) 
    ? response.status(200).json(drink)
    : response.status(400).json({ message: 'No pain, no gain!'});
});

app.listen(PORT, () => console.log(`${PORT}^`));

