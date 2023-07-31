import React from 'react'

interface Props{
    nome: string
    marca: string
    combustivel: String[]
}
function Desestruturacao({nome, marca,combustivel}: Props){
    return(
        <div>
            <p>{nome}</p>
            <p>{marca}</p>
            <p>{combustivel.map(comb =>(<p>{comb}</p>))}</p>
        </div>
        
    )
}
export default Desestruturacao;