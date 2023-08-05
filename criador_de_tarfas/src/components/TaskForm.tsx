import React from "react";

//css
import style from "./TaskForm.module.css"

interface Props{
    btnText : string
}

const TaskForm = ({btnText}: Props)=>{
    return(
        <form className={style.form}>
            <div className={style.input_container}>
                <label htmlFor="title">Título: </label>
                <input type="text" name="title" placeholder="Título da tarefa"/>
            </div>
            <div className={style.input_container}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input type="text" name="dificulty" placeholder="Dificuldade da tarefa"/>
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm