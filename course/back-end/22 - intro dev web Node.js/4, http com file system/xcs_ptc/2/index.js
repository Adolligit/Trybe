const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('up!'));

app.post('/hello', (req, res) => res.status(200).json({ "message": `Hello, ${req.body.name}` }));