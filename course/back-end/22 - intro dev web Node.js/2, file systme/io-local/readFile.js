const fs = require('fs');

const pathFile = 'readme.txt';

fs.readFile(pathFile, 'utf8', (error, content) => {
  if(error) {
    console.error(`Não foi possível ler o arquivo ${pathFile}\n Erro: ${error}`);
    process.exit();
  }

  console.log("Conteúdo do arquivo: ", content);
});

console.log('This is \'File System Async\'');