const express = require('express');
const bodyParser = require('body-parser');
const CEP = require('./controller/CEP');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ "message": "pong!" }));

app.get('/cep/:cep', CEP.findByCep);
app.post('/cep', CEP.create);

app.listen(3000, () => console.log('UP'));