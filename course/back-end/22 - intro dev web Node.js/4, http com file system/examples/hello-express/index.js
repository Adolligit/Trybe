const express = require('express');

const app = express();

app.get('/recipes/search', (req, res) => res.status(200).send('Hello Express!'));

app.listen(3000, () => console.log('3000p^'));