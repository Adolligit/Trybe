const fs = require('fs').promises;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;
const endpoint = '/simpsons';
const file = 'simpsons.json';

function read() {
  return fs
    .readFile(file, 'utf8')
    .then((data) => data)
    .catch((e) => `Erro durante a leitura do arquivo "${file}".\n${e.message}`);
}

async function write(content) {
  const data = JSON.parse(await read());
  const found = data.find((element) => +element.id === +content.id);
  
  if (found) return 1;

  data.push(content);

  return fs
    .writeFile(file, JSON.stringify(data, null, 2), { flag: 'w' })
    .then(() => console.log(`Added! -> id: ${content.id}, name: '${content.name}'.`))
    .catch((e) => `Erro ao escrever o arquivo "${file}".\n${e.message}`);
}

app.listen(port, () => console.log('up!'));

app.get(endpoint, async (_req, res) => {
  try {
    const data = await read();

    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).end();
  }
});

app.get(`${endpoint}/:id`, async (req, res) => {
  const data = JSON.parse(await read());
  const { id } = req.params;
  const foundobj = data.find((element) => +element.id === +id);

  if(!foundobj) return res.status(404).json({ "message": "simpsons not found" });
  res.status(200).json(foundobj);
});

app.post(endpoint, async (req, res) => {
  const { id, name } = req.body;
  const found = await write({ id, name });
  
  if (found) return res.status(409).json({ message: "id already exists" });
  res.status(204).end();
});