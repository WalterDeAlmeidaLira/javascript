
// arredondamento e troca de elementos
let num = 3587.854555
let numModificado = num.toFixed(2) // arredondamento para duas casa decimais
let numVirgula = numModificado.replace(".",",") // trocando o ponto pela vírgula

console.log("Número original: " + num)
console.log("Número com arredondamento " + numModificado)
console.log("Numero com vírgula: " + numVirgula)

// conversão
let numero = 1234
console.log("Convertendo para string " + String(numero))
let string = "4321"
console.log("Convertendo para number " + Number(string))

// maiúsculas minúsculas
let hello = "Olá, Mundo!!!"
console.log(hello.toLocaleLowerCase())
console.log(hello.toUpperCase())

// split e join
let frase = "Eu amo a Ingrid!"
let array = frase.split(" ")
console.log(array)
let novoArray = array.join("#")
console.log(novoArray)

// busca em string
let busca = "Eu amo Jesus!"
console.log("Existe " + busca.toLowerCase().includes("jesus"))

// transformando um string em array 
let word = "Deus é bom o tempo todo!"
console.log(Array.from(word))

// manipulando arrays
let tech = ["html","css","js"]
// add no fim
tech.push("sql")
// add no começo
tech.unshift("nodejs")
console.log(tech)
// removendo do fim
tech.pop()
console.log(tech)
// removendo do comeco
tech.shift()
console.log(tech)
// busca
console.log(tech.slice(1,3))
// encontra posiscao
console.log(tech.indexOf("css"))
// remove 1 ou mais 
tech.splice(1,2)
console.log(tech)

// condicional ternário

let num1 = 11

let teste = num1 > 10 ? "maior que dez" : "menor ou igual a dez"
console.log(teste)

console.log(13 % 12)