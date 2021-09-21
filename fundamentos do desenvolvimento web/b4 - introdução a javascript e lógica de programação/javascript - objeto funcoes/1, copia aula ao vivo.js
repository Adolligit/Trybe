let person = {
    name: 'Adelson',
    'last-name':'Lima',
    age: 23,
    'can-drive':true,
    movies: ['A Origem', 'A procura da Felicidade'],
    'favorite-numbers':[3,6,9],
    address:{
        street: 'Rua das Laranjeiras',
        number: 243,
        city: 'Chácara Santana'
    }
};

console.log(person['last-name']);

console.log(person['age']);

for(let key in person){
    console.log(person[key]);
}

person.favoriteAlbuns = ['Let it be', 'Abbey Road'];

console.log(person);