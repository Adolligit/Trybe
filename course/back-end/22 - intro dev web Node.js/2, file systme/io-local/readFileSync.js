const fs = require('fs');

const file = 'readme.txt';

try {
  const data = fs.readFileSync(file, 'utf8');
  console.log(data);
} catch (error) {
  console.error("Erro ao ler o arquivo: ", error.path);
  console.log(error);
}

console.log('This is \'File System Sync\'');