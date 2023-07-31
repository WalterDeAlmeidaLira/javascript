import React from "react";

interface Props{
    nome: string
}

function SegundoComp(props: Props){
    return(
        <div>
            <p>Esse é o segundo componente {props.nome}</p>
        </div>
    )
}

export default SegundoComp;