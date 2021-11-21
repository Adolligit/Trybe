/*
 - Criar um vetor com o nome dos autores dos filmes do gênero de "Ficção Científica" e "Fantasia".
 - Order: lexicográfica.
*/

const books = require('./books');

function fantasyOrScienceFictionAuthors() {
    return books
    .filter(book => book.genre != "Terror")
    .map(book => book.author['name'])
    .sort();
}

console.log(fantasyOrScienceFictionAuthors());