import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const endpoint = '/recipes';
const recipes = [
  {id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  {id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  {id: 3, name: 'Macarrão com molho branco', price: 35.0, waiTime: 25 }
];

app.use(bodyParser.json());

app.post(endpoint, (req, res) => {
  const { id, name, price } = req.body;
  const toke = re
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created sucessfully!' });
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

app.listen(3000, () => console.log('3000^'));