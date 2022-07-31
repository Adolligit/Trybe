const connection = require('./connection');
const axios = require('axios').default;

async function findByCep(cep) {
  const query = `
    SELECT *
    FROM ceps
    WHERE cep = ?
  `;

  return await connection.execute(query, [cep]);
}

async function create(data) {
  const { cep, logradouro, bairro, localidade, uf } = data;

  const query = `
    INSERT INTO ceps
    VALUES (?, ?, ?, ?, ?)
  `;

  connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
}

const searchAPI = async (cep) => await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

module.exports = {
  findByCep,
  create,
  searchAPI,
}