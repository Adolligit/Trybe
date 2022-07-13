const express = require('express');

const app = express();

app.listen(3000, () => console.log('uP!'));

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));