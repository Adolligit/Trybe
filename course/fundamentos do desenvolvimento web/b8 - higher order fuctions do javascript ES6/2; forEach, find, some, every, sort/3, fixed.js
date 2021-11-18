const names = ['Joõa', 'Irene', 'Fernando', 'Marica'];

function findNameWithFiveLetters(){
  return names.find((name) => name.length == 5);
}

console.log(findNameWithFiveLetters());