const connection = require('./connection');
const { validationFields } = require('../utils/index');

async function create(data) {
  const valid = validationFields(data);

  if (valid.message) return valid;

  const { firstName, lastName, email, password } = data;
  connection.execute(
    'INSERT INTO Users VALUES (null, ?, ?, ?, ?)',
    [firstName, lastName, email, password]);
}

async function getById(id) {
  const [finder] = await connection.execute(
    'SELECT * FROM Users WHERE id = ?',
    [id]
  );

  return finder[0];
}

async function getAll() {
  const [arrValues] = await connection.execute('SELECT * FROM Users');

  return arrValues;
}

async function update(id, data) {
  const valid = validationFields(data);

  if (valid.message) return valid;
  
  const { firstName, lastName, email, password } = data;
  await connection.execute(
    `
      UPDATE Users
      SET 
        first_name = ?,
        last_name = ?,
        email = ?,
        passW = ?
      WHERE id = ?
    `,
    [firstName, lastName, email, password, id]
  );

  return getById(id);
}

module.exports = {
  create,
  getById,
  getAll,
  update
};