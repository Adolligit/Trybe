const rl = require('readline-sync');

function main() {

  let answer = 'sim';
  
  while (answer === 'sim'){
    const number = rl.questionInt('Qual numero sera sorteado? ');
    
    const randomNumber = Math.round(10 * Math.random());

    if (randomNumber === number) console.log('Parabens, numero correto!');
    else console.log(`Opa, nao foi dessa vez. O numero era ${randomNumber}`);

    answer = rl.question('Deseja jogar novamente? (sim / nao) ');
    console.log('');
    console.log('-------------------');
    console.log('');
  }

  console.log('Obrigado por jogar!');
}

module.exports = main;