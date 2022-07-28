
const Book = require('../models/Book');

async function create(title, author_id) {
  if (title.length < 3) {
    console.log(`title: ${title}, lenght: ${title.length}`);
    return {
      error: {
        code:  'length_title_invalid',
        message: 'O título deve ter pelo menos 3 caracteres',
      },
    };
  }

  // Verificando se há livros regitrados para o autor com o mesmo título
  const books = await Book.getByAuthorId(author_id);
  const existingBook = books.some((book) => book.title === title);

  if (existingBook) {
    return {
      error: {
        code: 'book_already_exists',
        message: `Já existe um livro registrado com este título (${title}).`
      },
    };
  }

  // Registrando o livro!
  await Book.create(title, author_id);

  return { message: 'Livro cadastrado com sucesso!' };
}

async function findById(id) {
  const [book] = await Book.findById(id);

  return book;
}

async function getAll() {
  return await Book.getAll();
}

async function getByAuthorId(author_id) {
  return await Book.getByAuthorId(author_id);
}

module.exports = {
  create,
  findById,
  getAll,
  getByAuthorId,
};