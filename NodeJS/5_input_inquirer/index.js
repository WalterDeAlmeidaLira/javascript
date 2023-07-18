import inquirer from "inquirer";

inquirer.prompt([
    {
        name:'p1',
        message:'digite o valor da primeira nota: '
    },
    {
        name:'p2',
        message:'digite o valor da segunda nota: '
    }
]).then((resposta)=>{
    let nota1 = parseFloat(resposta.p1);
    let nota2 = parseFloat(resposta.p2);
    let media = (nota1 + nota2) / 2;
    console.log(`A média é ${media}`);
}).catch((err)=>{
    console.log(err);
})