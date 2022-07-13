const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const ENDPOINT = '/recipes';

const recipes = [
  {id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  {id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  {id: 3, name: 'Macarrão com molho branco', price: 35.0, waiTime: 25 }
];

app.get(ENDPOINT, (req, res) => {
  res.json(recipes);
});

app.get(`${ENDPOINT}/:id`, (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.put(`${ENDPOINT}/:id`, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === +id);

  console.log('Executou!');

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete(`${ENDPOINT}/:id`, (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);
  
  res.status(204).end();
});

app.listen(PORT, () => console.log(`${PORT}^`));