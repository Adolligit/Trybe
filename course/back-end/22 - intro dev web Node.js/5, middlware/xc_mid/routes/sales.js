const express = require('express');
const router = express.Router();
const salesAuth = require('../middlewares/auth/salesAuth');

router.post('/',
  salesAuth,
  (_req, res) => res.status(201).json({ "message": "Venda cadastrada com sucesso" }));

module.exports = router;