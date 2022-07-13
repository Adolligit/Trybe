const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 
      (err, content) => err ? reject(err) : resolve(content)
    );
  });
}

readFilePromise('leia-me.txt');