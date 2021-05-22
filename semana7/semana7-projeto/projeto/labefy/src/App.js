import "./App.css";
import React from "react";
import Labefy from "./components/Labefy/labefy";
import Login from "./components/Login/login";


class App extends React.Component {
  
  state = {
    pagina: 'login'
  }
  
  login = (nome, apelido) => {
    if (nome !== '' ){
      if (this.state.pagina === 'login' ) {
        this.setState({pagina: 'labefy' })
      }
    }else{
      alert('Por favor infrome o seu nome')
    }
  }

  
  render() {

    const atualizaPagina = () => {

      if (this.state.pagina === 'login'){
        return <Login login = {this.login}/>
      }else if (this.state.pagina === 'labefy'){
        return  <Labefy/>
      }
      }
    

    return (
      <div>{atualizaPagina()}</div>
    )
  }

}
export default App;


