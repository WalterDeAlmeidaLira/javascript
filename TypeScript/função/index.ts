// função callback
function saudacao(nome: string): string{
    console.log('funcao de saudacao')
    return `Olá ${nome}`;
}

function preSaudacao(f: (nome: string)=> string, nomedeusuario: string){
    console.log('preparando a função')

    const saudacao = f(nomedeusuario)

    console.log(saudacao);
}

preSaudacao(saudacao,'walter');

// generic 
function primeiroElemento<T>(elem: T[]): T{
    return elem[0];
}

console.log(primeiroElemento([1,2,3,4]));

// controlando os generics

function maiorNumero<T extends number | string >(a: T,b: T):T{
    let maior :T

    if(+a > +b){
        maior = a
    }else{
        maior = b
    }

    return maior
}
console.log(maiorNumero('10','8'));
console.log(maiorNumero(12,7));

// especificar o tipo de dado com generic 
function nomeRg<T>(nome: T,rg:T){
    return `A ${nome} tem o R.G ${rg}`
}

const exibir = nomeRg<number | string>("Ingrid",5135131);
console.log(exibir);

// operador rest 

function somaTodos(...n: number[]){
    return n.reduce((num,som)=> {
       console.log(num + " " + som);
        return num + som;
    },0);
}

console.log(somaTodos(1,2,10,4,5));
//console.log(somaTodos(1,2,3));
