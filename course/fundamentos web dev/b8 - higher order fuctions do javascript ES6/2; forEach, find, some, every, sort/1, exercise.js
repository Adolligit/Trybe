const books = [
	{
		id: 1,
		name: "As Crônicas de Gelo e Fogo",
		genre: "Fantasia",
		author: {
			name: "George R. R. Martin",
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: "O Senhor dos Anéis",
		genre: "Fantasia",
		author: {
			name: "J. R. R. Tolkien",
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: "Fundação",
		genre: "Ficção Científica",
		author: {
			name: "Isaac Asimov",
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: "Duna",
		genre: "Ficção Científica",
		author: {
			name: "Frank Herbert",
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: "A Coisa",
		genre: "Terror",
		author: {
			name: "Stephen King",
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: "O Chamado de Cthulhu",
		genre: "Terror",
		author: {
			name: "H. P. Lovecraft",
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

function authorBornIn1947() {
	return books.find((book) => book.author.birthYear === 1947);
}

function smallerName() {
	let nameBook,
		immutable = books;
	immutable.sort((book1, book2) => book1.name.length > book2.name.length);
	nameBook = immutable[1];
	return nameBook;
}

function getNamedBook() {
	return books.find((book) => book.name.length == 26);
}

function booksOrderedByReleaseYearDesc() {
	return books.sort((book1, book2) => book1.releaseYear < book2.releaseYear);
}

function everyoneWasBornOnSecXX() {
	return books.every(book => book["author"]["birthYear"] > 1901);
}

function someBookWasReleaseOnThe80s() {
  return books.some(book => book.releaseYear > 1980 && book.releaseYear < 1990);
}

function authorUnique(){
	// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
}

console.log(authorUnique());
