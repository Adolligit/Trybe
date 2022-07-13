const express = require('express');
const router = express.Router();
const authMiddleware = require('./auth-middleware');

router.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

function validateName(req, res, next) {
    const { name } = req.body;
    if (!name || name === '') return res.status(400).json({ message: `Data name ('${name}') is not valid!` });

    next();
  }
  
function validatePrice(req, res, next) {
  const { price } = req.body;
  return (price >= 0 && typeof price === 'number')

    ? next()
    : res.status(400).json({ message: `Data price ('${price}') is not valid!` }); 
}

router.get('/', (req, res) => res.status(200).json(recipes));

router.get('/pesquisar', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => 
    r.name.includes(name) 
    && r.price < Number(maxPrice)
  )
});

router.get(`/:id`, (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

router.post('/', validateName, validatePrice, (req, res) => {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, waitTime, chef: username });

  res.status(201).json({ message: 'Recipe created sucessfully!' });
});

router.post('/sales', (req, res) => {
  const { product, infos } = req.body;

});

router.put(`/:id`, validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

router.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' }); 

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

router.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!`}));

module.exports = router;