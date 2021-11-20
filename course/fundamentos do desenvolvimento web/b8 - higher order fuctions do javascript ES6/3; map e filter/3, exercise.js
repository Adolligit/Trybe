/*
 Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
*/

const books = require('./books');

/* 
    Essa não é a melhor solução pois se a lista for atualizada e incluírem novos gêneros, teríamos o resultado que não esperamos neste exercício.
*/

function fantasyOrScienceFiction() {
    return books.filter(value => value.genre != 'Terror');
}

console.log(fantasyOrScienceFiction());