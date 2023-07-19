//  INTERFACES COM TYPESCRIPT
var jogadorUm = {
    nome: 'joão',
    personagem: 'mago',
    jogadorVip: true,
    poder: 1000
};
function criaPersonagem(obj) {
    console.log("bem vindo ".concat(obj.nome, ", seu personagem \u00E9 um ").concat(obj.personagem));
    if (obj.jogadorVip) {
        console.log('Você tem poderes especiais');
    }
    console.log("Seu poder \u00E9 de ".concat(obj.poder));
}
;
criaPersonagem(jogadorUm);
;
var u1 = {
    email: "teste@teste.com"
};
var u2 = {
    email: "teste1@teste1.com",
    role: "profissaoDeTeste"
};
function showUser(user) {
    console.log("usu\u00E1rio: ".concat(user.email));
    if (user.role) {
        console.log("sua fun\u00E7\u00E3o \u00E9 ".concat(user.role));
    }
    ;
}
;
showUser(u1);
showUser(u2);
var palio = {
    marca: 'Fiat',
    rodas: '4'
};
var coordenadas = {
    x: 10
};
coordenadas.y = 15;
console.log(coordenadas);
var olavo = {
    nome: 'Olavo',
    idade: 40,
    salario: 7000
};
console.log(olavo);
var teste = [1, 2, 3, 4];
// tuplas readonly
function exibirNumeros(numeros) {
    console.log(numeros[0]);
    console.log(numeros[1]);
}
exibirNumeros([10, 20]);
