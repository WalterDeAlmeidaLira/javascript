"use strict";
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
console.log(typeof numbers);
let string = ["teste", "olá"];
console.log(`${string}`);
// 2 - outra maneira de criar arrays
let nums = [100, 200];
nums.push(300);
console.log(typeof nums);
console.log("outra forma de criar arrays " + nums);
// 3 - any 
let arr1 = [1, 2, "teste", [], { nome: "thiago" }];
arr1.push("bela");
console.log(typeof arr1);
console.log(arr1);
// 4 - parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 5);
// 5 - return das funções
function saudacao(nome) {
    return `olá ${nome}`;
}
console.log(saudacao('walter'));
// 6 - tipos de objetos
function passCoordenadas(coord) {
    console.log("coordenadas x " + coord.x);
    console.log("coordenadas y " + coord.y);
}
;
passCoordenadas({ x: 10, y: 100 });
let teste;
teste = {
    nome: "walter",
    teste: 10
};
console.log(teste);
// 7 - union type
function showBalance(balance) {
    return `O balanço deste mês é ${balance}`;
}
console.log(showBalance("500"));
console.log(showBalance(100));
// 8 - avançando dentro do union type
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'acesso negado';
    }
    return `Acesso do ${role} ao sistema`;
}
;
let exibir = showUserRole("walter");
console.log(exibir);
exibir = showUserRole(false);
console.log(exibir);
function showId(id) {
    console.log(`O id do usuário é ${id}`);
}
showId(123);
showId("4321");
function showCoords(obj) {
    console.log(`X = ${obj.x} Y = ${obj.y} Z = ${obj.z}`);
}
const obj = {
    x: 12,
    y: 15,
    z: -10
};
showCoords({ x: 10, y: 5, z: 0 });
console.log(`coordenada ${obj.x}`);
showCoords(obj);
// 11 - literal types
let teste3;
teste3 = 'ola';
function direcaoUsuario(direcao) {
    console.log(`a direção escolhida pelo usuário foi ${direcao}`);
}
console.log(direcaoUsuario("direita"));
// non null assertion operators
const p = document.getElementById("par");
console.log(p.innerText);
