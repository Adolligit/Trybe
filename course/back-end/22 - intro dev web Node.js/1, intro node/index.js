const rl = require('readline-sync');

const hello = require('./hello_world');
const readline = require('./usage_readline');
const imc = require('./imc');
const speed_avg = require('./speed_avg');
const sorted_game = require('./sorted_game');

console.log('-------------------------');
console.log('| ----- programas ----- |');
console.log('-------------------------');
console.log('|[1] Hello World        |');
console.log('|[2] Readline           |');
console.log('|[3] IMC                |');
console.log('|[4] Velocidade média   |');
console.log('|[5] Sorteio            |');
console.log('-------------------------');

const answer = rl.questionInt('Qual dos programas voce deseja executar? ')
console.log();
console.log('|      EXECUTANDO...    |');
console.log();

switch(answer){
  case 1: hello();
    break;
  case 2: readline();
    break;
  case 3: imc();
    break;
  case 4: speed_avg();
    break;
  case 5: sorted_game();
    break;
  default: console.log('Opção inválida!');
}