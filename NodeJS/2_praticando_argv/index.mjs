//interno
import soma from './soma.mjs';

//externo
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const a = parseInt(argv['a']);
const b = parseInt(argv['b']);

soma(a,b);

console.log(argv);