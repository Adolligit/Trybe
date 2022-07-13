const fs = require('fs');
const rescue = require('express-rescue');

module.exports = rescue((req, res, next) => {
  const token = fs.readFileSync('./ultra-secrect/token.txt', 'utf8');

  console.log('->', token);
 if (!token.length || token.length < 16) return res.status(401).json({ message: 'Token inválido!' });

  next();
});