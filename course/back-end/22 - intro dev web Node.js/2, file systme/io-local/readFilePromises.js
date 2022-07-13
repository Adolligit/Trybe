const fs = require('fs').promises;

const pathFile = 'readme.txt';

fs.readFile(pathFile, 'utf8')
  .then((content) => { 
    console.log('Conteúdo do arquivo: ', content);
  })
  .catch((error) => {
    console.error(`Não foi possível ler o arquivo ${pathFile}\n Erro: ${error}`);
    process.exit(1);
  });

console.log('This is \' File System Async With Promises Import\'');