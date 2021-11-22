// Encontre o nome do livro cujo o nome do autor começe com três iniciais.

const books = require('./books');

function authorWith3DotsOnName() {
    return books.filter(book => book.author['name'].split(".").length === 3 );
    NÃO FEITO!
}