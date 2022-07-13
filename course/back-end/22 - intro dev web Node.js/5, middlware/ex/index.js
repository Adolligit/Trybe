const express = require('express');
const bodyParser = require('body-parser');
const recipesRouter = require('./recipesRouter');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

const endpoint = '/recipes';
const port = 3000;

app.get('/open', function (req, res) {
  res.send('open!')
});

app.get('/fechada', authMiddleware, (_req,res) => res.send('closed'));

app.use(endpoint, recipesRouter);

app.listen(port, () => console.log(`${port}^`));