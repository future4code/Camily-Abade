import React from 'react';
import './login.css';


class Login extends React.Component {
  
  state ={
    nome: '',
    apelido: ''
  }

  handleName = (e) => {
    this.setState({nome: e.target.value})
  }

  handleInput = (e) => {
    this.setState({apelido: e.target.value})
  }

  render(){
    return (

    <div className="containerBody" >
      <main>

        <div className="fa-blink">

          <div className="containerImgLog">
            <div className="img" >
              <img src="/gorilaLogIn.jpg"  />
            </div>


            <div className="containerLog">
              <div className="logIn">
                <h2>Vai uma musiquinha aí??</h2>
              </div>

              <div className="Containerinput">
                <input placeholder='Nome' value={this.state.nome} onChange={this.handleName}/>
                <input placeholder='Apelido' value={this.state.apelido} onChange={this.handleInput}/>
              </div>

              <div className="logIn">
                <p>Faça o seu LogIn</p>
                <button onClick={() => this.props.login(this.state.nome, this.state.apelido)} >LogIn</button>
              </div>
              
            </div>
          </div>

        </div>


      </main>
    </div>
    )
  }
}
export default Login;
