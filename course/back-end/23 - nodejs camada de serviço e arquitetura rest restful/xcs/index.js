const express = require('express');
const bodyParse = require('body-parser');
const User = require('./models/User');

const port = 3000;
const endpoint = '/user';

const app = express();

app.use(bodyParse.json());

app.get(endpoint, async (_req, res) => {
  const values = await User.getAll();

  res.status(200).json(values);
});

app.get(`${endpoint}/:id`, async (req, res) => {
  const { id } = req.params;
  const finder = await User.getById(id);

  return (finder)
  ? res.status(200).json(finder)
  : res.status(404).json({ "message": "User not Found!" });
})

app.post(endpoint, async (req, res) => {
  const data = await req.body;
  const createUser = await User.create(data);

  return (typeof createUser === 'object')
  ? res.status(400).json(createUser)
  : res.status(201).json({ "message" : "User created sucessfully" });
})

app.put(`${endpoint}/:id`,async (req, res) => { 
  const { id } = req.params;
  const data = req.body;
  const finder = await User.getById(id);

  if (!finder) res.status(404).json({ "message": "User not Found!" });

  const updated = await User.update(id, data);
  return (!updated.message)
    ? res.status(200).json(updated)
    : res.status(400).json(updated);
});

app.listen(port , () => console.log(port,'^'));