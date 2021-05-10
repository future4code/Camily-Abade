import logo from './logo.svg';


import React from 'react';
import Etapa1 from './components/Etapa1/etapa1';
import './App.css';





class App extends React.Component {
  state = {
    pagina: 'etapa1'
  }
  render(){
    const atualizaPagina = () => {
      return(
        <Etapa1/>
      )
    }
  return(
    <div>{atualizaPagina()}</div>
  )
  }
   
}

export default App;
