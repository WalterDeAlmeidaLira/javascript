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