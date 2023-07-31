// exemplo de decorators
function decorators(){
    console.log('iniciando decorator')
    return function(target: any, propertkey:string, descriptor: PropertyDescriptor){
        console.log('executando o decorator')
        console.log(target)
        console.log(propertkey)
        console.log(descriptor)
        console.log('fim do decorator')
    }
}


class TesteDecorators{
    nome
    constructor(nome:string){
        this.nome = nome
    }
    //@decorators()
    exibirNome(){
        return `o nome é ${this.nome}`
    }
}

const obj = new TesteDecorators('joão');
console.log(obj.exibirNome())

//decorators para classes
function decClass(constructor:Function){
    //console.log(constructor);
    if(constructor.name === 'Usuario'){
        console.log('criando usuário')
    }
}

@decClass
class Usuario{
    constructor(public nome: string){
        this.nome = nome
    }

    get exibirNome(){
        return console.log(this.nome)
    }
}

const user = new Usuario('leandro')