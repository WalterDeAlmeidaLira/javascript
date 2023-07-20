// classes sem construtor - uso da exclamação
class Usuario{
    nome!: string
    idade!: string
}

const vilson = new Usuario()

vilson.nome = 'vilson';
console.log(vilson)
// classes com construtor
class NovoUsusario{
    nome: string
    idade: number
    constructor(nome: string,idade: number){
        this.nome = nome
        this.idade = idade
    }
}

const jose = new NovoUsusario('josé',40);

console.log(jose);

//readonly em propriedades da classe

class Carro{
    nome: string
    readonly rodas = 4
    constructor(nome: string){
        this.nome = nome
    }
}

const fusca = new Carro('fusca')

//fusca.rodas = 10

//herança e super 
class Personagem{
    nome
    idade
    forca
    constructor(nome:string,idade:number,forca:number){
        this.nome = nome
        this.idade = idade
        this.forca = forca
    }
}

class SuperPersonagem extends Personagem{
    superPoder = this.forca + 1000
    constructor(nome: string, idade: number, forca: number){
        super(nome,idade,forca)
    }
}

const lutador = new SuperPersonagem('mike',30,500)
console.log('poder de luta do mike',lutador.superPoder)

// get set 
class Conta{
    nome: string
    saldo: number
    constructor(nome: string, saldo:number){
        this.nome = nome
        this.saldo = saldo
    }

    set setSaldo(saldo: number){
        
        if(saldo === 0){
            return
        }        
        this.saldo = saldo
    }

    get pegaSaldo(){
        return this.saldo
    }

    pagaConta(valorConta: number){
        if(this.saldo > valorConta){
            this.saldo -= valorConta
            return 'valor pago com sucesso'
        }

        return 'você não tem saldo suficiente'
    }
}

const conta = new Conta('joao', 2000);

conta.setSaldo = 3000
console.log('saldo: ',conta.pegaSaldo)
console.log(`Pagar conta ${conta.pagaConta(1000)}`)
console.log(`Pagar conta ${conta.pagaConta(4000)}`)
