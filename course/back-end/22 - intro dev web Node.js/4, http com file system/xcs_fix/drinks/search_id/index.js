const express = require('express');

const app = express();

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// esta errado esta ordernação
const sorted = drinks.sort((a, b) => 
  (a.name.toLowerCase() > b.name.toLowerCase()) 
  ? -1
  : 0
);

app.get('/drinks', (req, res) => {
  res.json(sorted);
});

app
	.route('/drinks/:id')
	.get((req, res) => {
	const { id } = req.params;
	const drink = sorted.find((drink) => drink.id === Number(id));
	
	if (!drink) return res.status(404).send({ message: 'No pain, no gain!' });
	
	res.status(200).json(drink);
});

app.listen(3003, () => console.log('Escutando porta 3003'));
