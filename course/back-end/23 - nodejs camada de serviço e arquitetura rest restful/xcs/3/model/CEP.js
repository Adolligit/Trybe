const connection = require('./connection');
const axios = require('axios').default;

async function findByCep(cep) {
  const query = `
    SELECT cep, logradouro, bairro, localidade, uf
    FROM ceps c
    JOIN bairros b
    ON c.bairro_id = b.id
    WHERE c.cep = ?
  `;

  return await connection.execute(query, [cep]);
}

async function create(data) {
  const { cep, logradouro, id } = data;

  const query = `
    INSERT INTO ceps
    VALUES (?, ?, ?)
  `;
  connection.execute(query, [cep, logradouro, id]);
}

const searchAPI = async (cep) => await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

module.exports = {
  findByCep,
  create,
  searchAPI,
}