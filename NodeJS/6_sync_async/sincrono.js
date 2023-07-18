const fs = require('fs');

console.log('início');

fs.writeFileSync("arquivo.txt","olá");

console.log('fim');