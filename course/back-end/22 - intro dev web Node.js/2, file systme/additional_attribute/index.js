const fs = require('fs').promises;

const pathFile = 'name-file.txt';

fs.writeFile(pathFile, 'Não sobrescreve', { flag: 'wx' })
  .then(() => { 
    console.log('Arquivo salvo');
  })
  .catch((error) => console.log(error))