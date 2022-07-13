const express = require('express');
const bodyParser = require('body-parser');
const salesRoute = require('./routes/sales');
const signupRoute = require('./routes/signup');
const authentication = require('./middlewares/auth/authentication');

const app = express();
app.use(bodyParser.json());

const endpoints = ['/signup','/sales'];
const port = 3000;

app.use(endpoints[0], signupRoute);
app.use(authentication);
app.use(endpoints[1], salesRoute);

app.listen(port, () => console.log(`${port}^`));
