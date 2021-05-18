import logo from './logo.svg';


import React from 'react';
import Etapa1 from './components/Etapa1/etapa1';
import Etapa2 from './components/Etapa1/Etapa2/etapa2';
import Etapa3 from './components/Etapa1/Etapa3/etapa3';
import Etapa4 from './components/Etapa1/Etapa4/etapa4';


import './App.css';





class App extends React.Component {

  state = {
    pagina: 'etapa1'
  }


  mudaAPagina = () => {

    if (this.state.pagina === 'etapa1') {
      this.setState({ pagina: 'etapa2' })
    } else if (this.state.pagina === 'etapa2') {
      this.setState({ pagina: 'etapa3' })
    } else if (this.state.pagina === 'etapa3') {
      this.setState({ pagina: 'etapa4' })
    }

    }

    render(){
      const atualizaPagina = () => {

          if (this.state.pagina === 'etapa1'){
            return <Etapa1 mudaAPagina ={this.mudaAPagina} />
          }else if (this.state.pagina === 'etapa2'){
            return <Etapa2 mudaAPagina ={this.mudaAPagina}/>
          }else if (this.state.pagina === 'etapa3'){
            return <Etapa3 mudaAPagina ={this.mudaAPagina}/>
          }else if (this.state.pagina === 'etapa4'){
            return <Etapa4 />
          }

      }
      return (
        <div>{atualizaPagina()}</div>
      )
    }

  }

  export default App;
