// importando arquivos
import saudacao from './exemplo.js'

console.log(saudacao('walter'))

// outra forma de importat 
import * as exportando from './exportando.js'

console.log(exportando)

// importando interfaces

import {Humano} from './tipos.js'

class Usuario implements Humano{
    nome: string
    idade: number
    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
}

const dias = new Usuario("dias", 25)

console.log(dias)