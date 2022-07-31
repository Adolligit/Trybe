const connection = require('./connection');

async function create(data) {
  try {
    const { bairro, localidade, uf } = data;

     return await connection.execute(
      `INSERT INTO bairros VALUES (null, ?, ?, ?)`,
      [bairro, localidade, uf],
    )
  } catch (error) {
    return error;
  }
}

module.exports = {
  create
};