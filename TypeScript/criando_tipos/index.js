// constraint com generic
function exibeInf(obj) {
    console.log("nome ".concat(obj.nome));
}
var jose = { nome: 'jose de assis', idade: 20 };
var fabio = { nome: 'fabio da silva', idade: 30 };
var engenheiro = { profissao: 'engenheiro' };
exibeInf(jose);
exibeInf(fabio);
var palio = { nome: 'palio', motor: 1.3, cor: "cinza" };
var bola = { nome: 'bola', motor: false, cor: 'azul' };
console.log(typeof palio);
console.log(palio);
console.log(bola);
// tipos de parâmetros
function exibirPessoa(obj, chave) {
    console.log("A chave tem o valor ".concat(obj[chave]));
}
var pessoa = {
    nome: 'messi',
    profissao: 'jogador'
};
exibirPessoa(pessoa, 'nome');
