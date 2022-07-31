const { default: axios } = require('axios');
const CEP = require('../service/CEP');

const findByCep = async (req, res) => {
  /*
    A camada controller não deve avaliar o CEP pois isso é uma regra de negócio,
    tudo que o Controller deve fazer é avaliar se os campos necessários estão presentes
    e se seu valores também existem.

    A regras como "a primeira letra do nome deve ser maiúscula", ou , "o CEP deve ser válido",
    são restrições que devem ser tratadas no Service, pois são regra de negócio.
  */
  const { cep } = req.params;
  const cepValid = new RegExp(/^\d{5}-?\d{3}$/);

  if (!cepValid.test(cep)) {
    return res.status(400).json({ 
      "error": { "code": "invalidData", "message": "CEP inválido" } 
    });
  }

  const address = await CEP.findByCep(cep);

  if (address.error) return res.status(404).json(address);

  await CEP.create(address);
  return res.status(200).json(address);
};

const create = async (req, res) => {
  const HTTP_BAD_ERROR = 400;
  const expectedKeys = ['cep', 'logradouro', 'bairro', 'localidade', 'uf'];

  for (key of expectedKeys) {
    const validKey = Object.keys(req.body).some((bodyKey) => bodyKey === key);

    if (!validKey) {
      return res.status(HTTP_BAD_ERROR).json({ 
        "error": {
          "code" : "invalidData",
          "message": `O campo '${key}' é obrigatório.`,
        },
      });
    }

    if (!req.body[key].length) {
      return res.status(HTTP_BAD_ERROR).json({ 
        "error": {
          "code" : "emptyField",
          "message": `O campo '${key}' esta vazio`,
        },
      });
    }
  }

  const created = await CEP.create({ ...req.body });
  
  if (created.error) return res.status(422).json(created);
  return res.status(201).json(req.body);
};

module.exports = {
  findByCep,
  create
};