module.exports = (req, res, next) => {
  const { productName, infos } = req.body;

  if (!productName || !infos) {
    return res.status(400).json({ "message": "Os campos 'productName' e 'infos' são obrigatórios." });
  }

  if (productName.length <= 4) {
    return res.status(400).json({ "message": "O campo 'productName' deve ter pelo menos 4 caracteres" });
  }

  const { saleDate, warrantyPeriod } = infos;

  if (!saleDate || !warrantyPeriod) {
    return res.status(400).json({ "message": "'infos': os campos 'saleDate' e 'warrantyPeriod' são obrigatórios" });
  }

  const splitDate = saleDate.split('/');
  
  if (splitDate.length !== 3) {
    return res.status(400).json({ "message": "'saleDate': falta algum campo da data." });
  }
  
  splitDate.forEach((date) => {
    if (!date || date.length < 2) return res.status(400).json({ "message": "A data em 'saleDate' esta incorreta!" });
  });
  
  const day = splitDate[0];
  const month = splitDate[1];
  const year = splitDate[2];

  if (day.length !== 2 && day <= 31) return res.status(400).json({ "message": "'saleDate': o dia esta incorreto" });
  if (month.length !== 2 && month <= 12) return res.status(400).json({ "message": "'saleDate': o mês esta incorreto" });
  if (year.length !== 4) return res.status(400).json({ "message": "'saleDate': o ano esta incorreto" });

  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ "message": "O campo 'warrantyPeriod' precisa estar entre 1 e 3" });
  }

  next();
}