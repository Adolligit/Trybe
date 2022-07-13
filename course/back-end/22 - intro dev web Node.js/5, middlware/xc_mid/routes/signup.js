const express = require('express');
const fs = require('fs').promises;
const rescue = require('express-rescue');
const crypto = require('crypto');
const singupAuth = require('../middlewares/auth/signupAuth');

const router = express.Router();

router.post('/', singupAuth, rescue((req, res, next) => {
  const token = crypto.randomBytes(8).toString('hex');

  // req.headers.authorization = token;
  fs.writeFile('./ultra-secrect/token.txt', token, { flag: 'w' });
  res.status(200).json({ token });
}));

module.exports = router;