import chalk from "chalk";

// chalk e minimist
let nota = 8;

if(nota > 7){
    console.log(chalk.green(`Parabéns, você foi aprovado`));
}else{
    console.log(chalk.red.bgBlue(`Você foi reprovado`));
}