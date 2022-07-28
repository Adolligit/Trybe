const connection = require('./connections');

async function getAll() {
  const [books] = await connection.execute(`
    SELECT  *
    FROM  Books`);

  return books;
}

async function findById(id) {
  const [book] = await connection.execute(`
    SELECT *
    FROM Books
    WHERE id = ?`, 
    [id]);
    
  return book;
}

async function getByAuthorId(author_id) {
  const [books] = await connection.execute(`
    SELECT * 
    FROM  Books 
    WHERE author_id = ?`,
    [author_id]);

  return books;
}

async function create(title, author_id) {
  await connection.execute(`
    INSERT INTO Books 
    VALUES (null, ?, ?)`,
    [title, author_id]);

  return true;
}

module.exports = {
  getAll,
  findById,
  getByAuthorId,
  create,
};