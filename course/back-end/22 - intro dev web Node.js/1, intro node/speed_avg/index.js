const readline = require('readline-sync');

function speedRun() {
  const distancia = readline.questionFloat('Distância (m): (ex.: 450) ');
  const tempo = readline.questionFloat('Tempo (s): (ex.: 6) ');
  
  const velocidadeMedia = distancia / tempo;
  
  console.log(`Velocidade média: ${velocidadeMedia}`);
}

module.exports = speedRun;