import React, { useState, ChangeEvent } from 'react'

const UsoHook = ()=>{
    const [texto,setTexto] = useState<string | null>('teste do use state');
    const alterandoVariavel = (e: ChangeEvent<HTMLInputElement>) =>{
        setTexto(e.target.value);
    }
    return(
        <div>
            <p>
                o texto do hook é {texto}
            </p>
            <input type='text' onChange={alterandoVariavel}></input>
        </div>
    ) 
}

export default UsoHook;