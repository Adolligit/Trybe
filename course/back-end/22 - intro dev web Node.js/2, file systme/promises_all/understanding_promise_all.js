const fs = require('fs').promises;

Promise.all([
  fs.readFile('t1.txt'),
  fs.readFile('t2.txt'),
  fs.readFile('t3.txt')
])
  .then(([t1, t2, t3]) => {
    const fileSizeSum = t1.byteLength + t1.byteLength
     + t3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((error) => {
    console.error('Erro ao ler arquivos: ', error.message);
   });

console.log("This is \'File System Import Promise\' with array");
  