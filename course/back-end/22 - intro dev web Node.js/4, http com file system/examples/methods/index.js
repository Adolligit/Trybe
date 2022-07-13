const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.post('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.put('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.delete('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.all('/', (req, res) => {
//     res.send('Hello World!');
// });

app
  .route('/')
  .get((req, res) => {
    res.send('Hello World! Get');
  })
  .post((req, res) => {
    res.send('Hello World! Post');
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'));