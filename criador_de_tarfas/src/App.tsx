import React from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//css
import style from './App.module.css';


function App() {
  return (
   <div>
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa'/>
        </div>          
        <div>
          <h2>Suas tarfeas: </h2>
          <TaskList />
        </div>
      </main>
      <Footer />
   </div>
  );
}

export default App;
