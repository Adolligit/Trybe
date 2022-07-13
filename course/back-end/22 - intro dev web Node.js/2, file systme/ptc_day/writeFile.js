const fs = require('fs').promises;

const obj = { id: 1, name: 'adelson', lastname: 'julião' };

fs.writeFile('Ed Angola.json', JSON.stringify(obj, null, 2), { flag: 'w' })
  .then(() => console.log('São Bento Grande'))
  .catch((e) => console.log('A balança da justiça nunca pesa o que devia!\n', e));