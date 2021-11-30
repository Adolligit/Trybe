const musicas = [
  {id: '31031685', title: 'Partita in C moll BMV 997'},
  {id: '31031686', title: 'Toccata and Fugue, BMV 565'},
  {id: '31031687', title: 'Chaconne, Partita No. 2 BMV 1004'},
];

function findMusic(id){
  return musicas.find(musica => musica.id === id);
}

console.log(findMusic('31031685'));