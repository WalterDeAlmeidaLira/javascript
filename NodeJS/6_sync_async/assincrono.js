const fs = require('fs');

console.log('inicio');

fs.writeFile("arquivo.txt","olá",(err)=>{
    setTimeout(()=>{
        console.log("arquivo criado com sucesso!!");
    },2000)
});

console.log("fim")