//  INTERFACES COM TYPESCRIPT

interface Jogador{
    nome: string 
    personagem: string
    jogadorVip: boolean
    poder: number
}

const jogadorUm: Jogador = {
    nome: 'joão',
    personagem: 'mago',
    jogadorVip: true,
    poder: 1000
}

function criaPersonagem(obj: Jogador){
    console.log(`bem vindo ${obj.nome}, seu personagem é um ${obj.personagem}`);
    if(obj.jogadorVip){
        console.log('Você tem poderes especiais');
    }
    console.log(`Seu poder é de ${obj.poder}`);
};

criaPersonagem(jogadorUm);

//INTERFACE COM PROPRIEDADE OPCIONAL

interface User{
    email: string
    role?: string
};

const u1: User = {
    email: "teste@teste.com"
};

const u2: User = {
    email: "teste1@teste1.com",
    role:"profissaoDeTeste"
};

function showUser(user: User){
    console.log(`usuário: ${user.email}`);
    if(user.role){
        console.log(`sua função é ${user.role}`);
    };
};

showUser(u1);
showUser(u2);

// readonly 

interface Carro{
    marca: string
    readonly rodas: string
}

const palio: Carro = {
    marca: 'Fiat',
    rodas: '4'
}

// index signature

interface Coordenadas{
    [index: string]: number
}

const coordenadas: Coordenadas = {
    x: 10
}

coordenadas.y = 15

console.log(coordenadas);

// UNIÃO DE TIPOS 
interface Usuario{
    nome: string
    idade: number
}

interface Funcionario{
    salario: number
}

type Engenheiro = Usuario & Funcionario;

const olavo: Engenheiro = {
    nome: 'Olavo',
    idade: 40,
    salario: 7000
}

console.log(olavo);

// tupla 

type array = [number,number,number,number];

const teste: array = [1,2,3,4];

// tuplas readonly
function exibirNumeros(numeros: readonly[number,number]){
    console.log(numeros[0])
    console.log(numeros[1])
}


exibirNumeros([10,20]);