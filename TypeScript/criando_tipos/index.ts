// constraint com generic
function exibeInf<T extends {nome: string}>(obj: T){
    console.log(`nome ${obj.nome}`);
}

const jose = {nome: 'jose de assis',idade:20};
const fabio = {nome: 'fabio da silva',idade:30};
const engenheiro = {profissao: 'engenheiro'};

exibeInf(jose);
exibeInf(fabio);
//exibeInf(engenheiro);

// interfaces com generic
interface Objeto<T,U>{
    nome: string
    motor: T
    cor: U
}

type Carro = Objeto<number,string>
type Bola = Objeto<boolean,string>

const palio: Carro={nome:'palio',motor:1.3,cor: "cinza"};
const bola: Bola={nome:'bola',motor: false, cor: 'azul'};

console.log(typeof palio);
console.log(palio);
console.log(bola)

// tipos de parâmetros
function exibirPessoa<T,K extends keyof T>(obj: T, chave: K){
    console.log(`A chave tem o valor ${obj[chave]}`);
}

const pessoa = {
    nome: 'messi',
    profissao: 'jogador'
}

exibirPessoa(pessoa,'nome');

// definindo tipos com typeof
const usuario1: string = 'teste';

const usuario2: typeof usuario1 = 'teste2';
const usuario3: typeof usuario1 = 'teste3';

type x = typeof usuario1;

let teste: x = 'ola';