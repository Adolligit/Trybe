const Book = require('../services/Book');

let HTTP_STATUS = 0;

async function create (req, res) {
  const { author_id, title } = req.body;

  if (author_id === undefined || title === undefined) {
    HTTP_STATUS = 400;

    return res.status(HTTP_STATUS).json({ 
        HTTP_STATUS, 
        message: "Os campos 'author_id' e 'title' são obrigatórios", 
      });
  }

  const response = await Book.create(title, author_id);

  if (response.error) {
    const { error: { code, message } } = response;

    if (code === 'length_title_invalid') HTTP_STATUS = 422;
    if (code === 'book_already_exists') HTTP_STATUS = 409;
    if (code === 'error_during_register') HTTP_STATUS = 500;

    return res.status(HTTP_STATUS).json({ HTTP_STATUS, code, message });
  }

  const { message } = response;
  HTTP_STATUS = 201;

  return res.status(HTTP_STATUS).json({ HTTP_STATUS, message });
}

async function getById (req, res) {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found!' });

  return res.status(200).json(book);
}

async function getAll(_req, res) {
  const books = await Book.getAll();
  
  return res.status(200).json(books);
}

async function getByAuthorId (req, res) {
  const { author_id } = req.query;
  const books = await Book.getByAuthorId(author_id);

  return res.status(200).json(books);
}

module.exports = {
  create,
  getById,
  getAll,
  getByAuthorId,
};