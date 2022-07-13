const fs = require('fs');

try {
  const file = fs.readFileSync('Ed Angola.json', 'utf8');
  console.log(file);
} catch (e) {
  console.log('Tem passarinho pequeno, que mata cobra coral\n', e);
}