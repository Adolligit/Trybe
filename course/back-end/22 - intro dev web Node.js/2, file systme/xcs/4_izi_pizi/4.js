const fs = require('fs').promises;

const PATHFILE = 'simpsons.json';
const IDS = [6, 10];

async function read(file) {
  const content = await fs.readFile(file, 'utf8').catch((e) => e.message);

  return JSON.parse(content);
}

const search = (arr, findId) => arr.find(({ id }) => +id === findId);

async function print(file, id) {
  const arr = await read(file);

  return new Promise((resolve, reject) => { 
    const obj = search(arr, id);

    if (!obj) reject(new Error('Id não encontrado'));
    resolve (console.log(`${obj.id} - ${obj.name}`));
   })
}

async function deleteFromId(file, ...ids) {
  let arr = await read(file);

  ids.forEach((id) => { // excluíndo ids do 'arr'
    arr = arr.filter((value) => +value.id !== id);
  })

  return arr;
}

async function save(path, content) {
  fs.writeFile(path, content, { flag: 'w' })
    .then(() => console.log('Arquivo salvo com sucesso!'))
    .catch((error) => console.error('Erro ao tentar salvar \nErro:', error))
}

async function update(file) {
  const arr = await read(file);
  const updated = await search(arr, )
}

async function main(file) {
  print(file, 1);
  deleteFromId(file, ...IDS).then((arr) => save(file, JSON.stringify(arr, null, 2)));
  deleteFromId(file, 5,6,7,8,9)
    .then((arr) => save('simpsonsFamily.json', JSON.stringify(arr, null, 2)))
    .then(() => read('simpsonsFamily.json'))
    .then((arr) => {
      const id = arr.length + 1;

      arr.push({ id: '5', name: 'Maggie Simpson' });
      save('simpsonsFamily.json', JSON.stringify(arr, null, 2));
    });
  
}


main(PATHFILE);