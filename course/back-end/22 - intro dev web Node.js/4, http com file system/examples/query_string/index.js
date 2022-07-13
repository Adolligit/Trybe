const express = require('express');

const app = express();

const endpoint = '/recipes/';

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get(`${endpoint}search`, (req, res) => {
  const { maxPrice } = req.query;
  const filteredRecipes = recipes.filter((recipe) => 
    recipe.price < Number(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get(`${endpoint}search`, (req, res) => {
  const { minPrice } = req.query;
  const filteredRecipes = recipes.filter((recipe) => 
    recipe.price >= Number(minPrice)
  );
  res.status(200).json(filteredRecipes);
});


app.get(`${endpoint}search`, (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((recipe) => 
    recipe.name.includes(name)
    && recipe.price >= Number(minPrice)
    && recipe.price < Number(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});


app.get(`${endpoint}:id`, (_req, res) => {
  res.status(200).json({ message: 'Still on endpoint with ID'});
});

app.listen(3000, () => console.log('3000p^'));