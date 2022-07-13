const fs = require('fs').promises;

const pathFile = 'newReadme.txt';
const fileContent = 'Novo arquivo escrito com \' File System Async Import Promises\'. Sendo assim, utilizamos \'.promises\' na importação.'

fs.writeFile(pathFile, fileContent)
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((error) => console.error("Erro ao escrever o arquivo", error.message));
  