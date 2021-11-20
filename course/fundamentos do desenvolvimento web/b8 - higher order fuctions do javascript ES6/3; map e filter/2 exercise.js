/*
 - Crie um array de objetos a partir do array de livros.
 - Os objetos devem ter o nome do autor e a idade que este possuía no lançamento do livro.
 - Ordernar de forma crescente o array por idade do author.
*/

const books = require('./books');

const arrObj = books
.map((book) => (
    {
        author: book.author.name, 
        ageOnRelease: (book.releaseYear - book.author.birthYear)
    }))
.sort((x, y) => (x.ageOnRelease - y.ageOnRelease));

console.log(arrObj);