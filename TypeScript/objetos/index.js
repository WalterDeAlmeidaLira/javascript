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
