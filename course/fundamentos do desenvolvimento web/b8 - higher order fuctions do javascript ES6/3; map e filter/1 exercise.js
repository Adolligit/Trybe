/*
 Crie um array com strings no formato "NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA"
*/

const books = require('./books');

const arrayString = books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`)

console.log(arrayString);

