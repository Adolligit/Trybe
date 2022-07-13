const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('up!'));

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  if (+age <= 17) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Hello, ${name}!` });
});
