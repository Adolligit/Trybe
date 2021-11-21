/*
    Crie um array com o nome de todos os livros com mais de 60 anos de publicação
*/

const books = require('./books');

function oldBooks() {
    let currentYear = new Date().getFullYear();

    return books
    .filter(book => (currentYear - book.releaseYear) > 60)
    .map(book => book.name);
}

console.log(oldBooks());  