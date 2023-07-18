const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

console.log(argv);

//const nome = argv._[0].split('=')[1];

const nome2 = argv['nome']
const idade = argv['idade']

console.log(nome2)
console.log(idade)
//console.log(nome)