// função callback
function saudacao(nome) {
    console.log('funcao de saudacao');
    return "Ol\u00E1 ".concat(nome);
}
function preSaudacao(f, nomedeusuario) {
    console.log('preparando a função');
    var saudacao = f(nomedeusuario);
    console.log(saudacao);
}
preSaudacao(saudacao, 'walter');
// generic 
function primeiroElemento(elem) {
    return elem[0];
}
console.log(primeiroElemento([1, 2, 3, 4]));
// controlando os generics
function maiorNumero(a, b) {
    var maior;
    if (+a > +b) {
        maior = a;
    }
    else {
        maior = b;
    }
    return maior;
}
console.log(maiorNumero('10', '8'));
console.log(maiorNumero(12, 7));
// especificar o tipo de dado com generic 
function nomeRg(nome, rg) {
    return "A ".concat(nome, " tem o R.G ").concat(rg);
}
var exibir = nomeRg("Ingrid", 5135131);
console.log(exibir);
// operador rest 
function somaTodos() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (num, som) {
        console.log(num + " " + som);
        return num + som;
    }, 0);
}
console.log(somaTodos(1, 2, 10, 4, 5));
//console.log(somaTodos(1,2,3));
