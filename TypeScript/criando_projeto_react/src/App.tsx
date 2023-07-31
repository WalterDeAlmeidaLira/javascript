import React from 'react';
//importando um componente
import PrimeiroComponente from './components/primeiroComponente';

//segundo componente
import SegundoComp from './components/SegundoComp';

//desestruturação 
import Desestruturacao from './components/Desestruturacao';

 // useState com hook 
 import UsoHook from './components/UsoHook';

function App() {
  // craindo variáveis
  const nome: string = 'João';
  const idade: number = 29;
  const trabalha: boolean = false;
  
  //criando funções
  const saudacao = (nome: string): string =>{
    return `Olá, ${nome}!`
  } 

  return (
    <div className="App">
      <p>Typescript com React</p>
      <p>nome: {nome}</p>
      <p>idade: {idade}</p>
      {trabalha &&(
      <div>
        <p>está trabalhando</p>    
      </div>
      )}
      <p>{saudacao(nome)}</p>
      <PrimeiroComponente />
      <SegundoComp nome=' - isso é um propriedade do segundo componente'/>
      < Desestruturacao 
      nome='Palio'
      marca='Fiat'
      combustivel={["gasolina","Álcool"]}
      />

      <UsoHook />
    </div>
    
    
  );
}

export default App;
