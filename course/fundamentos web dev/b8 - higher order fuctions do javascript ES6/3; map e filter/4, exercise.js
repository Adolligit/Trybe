/*
 Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
*/

const books = require('./books');

function oldBooksOrdered(){
    let currentYear = new Date().getFullYear();

    return books
    .filter(book => (currentYear - book.releaseYear) > 60)
    .sort((a, b) => a - b);
}


console.log(oldBooksOrdered());