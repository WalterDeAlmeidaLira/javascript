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
// CLASSES COM INTERFACE 
interface PersonagemNome{
    nome: string
    exibeNome(nome: string): string
}

class Jogador implements PersonagemNome{
    nome: string
    constructor(nome: string){
        this.nome = nome
    }
    exibeNome(){
        return `O nome do jogador é ${this.nome}`
    }
}

const jg1 = new Jogador('fulano');

console.log(jg1.exibeNome());

// override 
class base{
    metodoTeste(){
        console.log("exibe método da classe base");
    }
}

class topo extends base{
    metodoTeste(): void {
        let a = 10
        let b = 15
        console.log(`estou sobrescrevendo um método. ;) ${a + b}`);
    }
}

const testeSobrescrita = new topo()
const testeSobrescrita2 = new base()

testeSobrescrita2.metodoTeste()

testeSobrescrita.metodoTeste()

//VISIBILIDADE EM CLASSES

// PUBLIC - É A VISIBILIDADE DEFAULT E PODE SER ACESSADO POR TODOS 
//PROTECTED - ACESSÍVEL SOMENTE AS CLASSES FILHAS, AS PROPRIODADES SO PODEM SER ACESSADAS ATRAVÉS DE MÉTODOS
//PRIVATE - SOMENTE A CLASSE PODE ACESSAR

// PROTECTED

class A{
    protected nomeClasse: string = 'A'

    protected mostraNome():string{
        return `método protegido`;
    }
}

class B extends A {
     nome() {        
        console.log( `nome da classe pai é ${this.nomeClasse}`)
        console.log(this.mostraNome());
    }
}

const bTeste = new B()

bTeste.nome();

// private

class ClassePrivada{
    private nome: string = 'private'

    exibirNome(){
        return `nome da class é ${this.nome}`
    }
}

const nC = new ClassePrivada();
console.log(nC.exibirNome());

//static - permite acessar propriedades e métodos sem instanciar objetos

class Estatico{
    static nome: string = 'estático'

    static somador(a: number, b: number){
        return a + b
    }
}

console.log(Estatico.somador(1,2))
console.log(Estatico.nome);

// classes com generic

class item<T, U>{
    primeiro: T
    segundo: U
    
    constructor(primeiro: T, segundo: U){
        this.primeiro = primeiro
        this.segundo = segundo
    }

    get exibir(){
        return `${this.primeiro} + ${this.segundo}`
    }
}

const novoItem = new item('teste', 10);

console.log(novoItem.exibir)