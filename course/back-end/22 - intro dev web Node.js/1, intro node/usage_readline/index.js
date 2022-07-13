const readline = require('readline-sync');

function main() {
  const name = readline.question('Nome: ');
  const age = readline.question('Idade: ');
  
  const curYear = 2022;
  const year = curYear - age;
  
  console.log(`Nome: ${name}; Idade: ${age}; Ano de Nascimento: ${year}`);
}

module.exports = main;