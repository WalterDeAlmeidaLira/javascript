import chalk from 'chalk';
import leitor from 'readline';

const readLine = leitor.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine.question("Quanto é 10 + 10? ",(resposta)=>{
    resposta = parseInt(resposta);
    if(resposta === 20){
        console.log(chalk.green(`você acertou!!`));
    }else{
        console.log('você errou!!');
    }
    readLine.close();
});
