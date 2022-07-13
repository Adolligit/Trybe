const fs = require('fs').promises;

const data = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const arrFile = data.map((e, i) => fs.writeFile(`file${i + 1}.txt`, e, { flag: 'w' }));

Promise.all(arrFile).then(() => console.log('Arquivos criados com sucesso!'));