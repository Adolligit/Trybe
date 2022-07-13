const readline = require('readline-sync');

function imc() {

  const peso = readline.questionFloat('Peso (kg): (ex.: 54.00) ');
  const altura = readline.questionFloat('Altura (m): (ex.: 1.70) ');
  const imc = peso / altura ** 2;
  
  let categoria = '';

  if (imc > 40) categoria = 'Obesidade graus III e IV';
  else if (imc > 35) categoria = 'Obesidade gratu II';
  else if (imc > 30) categoria = 'Obesidade grau I';
  else if (imc > 25) categoria = 'Acima do peso (sobrepeso)';
  else if (imc > 18) categoria = 'Peso normal';
  else categoria = 'Abaixo do peso (magreza)';

  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Categoria: ${categoria}`);
}

module.exports = imc;