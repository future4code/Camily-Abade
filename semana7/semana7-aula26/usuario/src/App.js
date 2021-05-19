import logo from './logo.svg';
import React from 'react'
import './App.css';
import axios from 'axios';


const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/"

export default class App extends React.Component {  

  componentDidMount() {
    this.getUsers();
  }

  state = {
    inputName: "",
    inputEmail: "",
    listaUsuario: [],
    estado: false
  }

  handleName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };


  createUsers = () => {
    const header = {
      headers: {
        Authorization: "camily-abade-paiva"
      }
    }
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, body, header)
    .then (() => {
      alert('Usuário criado com sucesso!!')
    })

    .catch((err) => {
      alert('Deu ruim! nhe :/')
    })

  }

  getUsers = () => {
    const header = {
      headers: {
        Authorization: "camily-abade-paiva"
      }
    }
    
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, header)
    .then ((res) => {
      this.setState({listaUsuario: res.data })
    })

    .catch((err) => {
      alert('ERROR AQUIIIIII')
    }) 
  }


  deletar = (id) => {
    const header = {
      headers: {
        Authorization: "camily-abade-paiva"
      }
    }
    
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, header)
    .then (() => {
      alert('Usuário deletado com sucesso!!')
    })

    .catch((err) => {
      alert('ERROR PARA DELETAR')
    })
    this.getUsers()
  }

  trocaPagina = () => {
    this.setState({trocaPagina: !this.state.trocaPagina})
  }

  
  render () {
    const listaUsuario = this.state.listaUsuario.map((usuario) => {
      return (
        <div>
          <li>{usuario.name}</li>
          <button onClick={() => this.deletar(usuario.id)}>X</button>
        </div>  
      )
    })
    const troca = this.state.trocaPagina
    return (

      <div className='container'>
        <div>
          <h1>Labenusers</h1>
          <button onClick={this.trocaPagina}>Trocar de página</button>
        </div>
        {!troca && (<div>
          <h2>Criar Usuário</h2>
          <input value={this.state.inputName} onChange={this.handleName} placeholder='Nome'></input>
          <input value={this.state.inputEmail} onChange={this.handleEmail} placeholder='E-mail'></input>
          <button onClick={this.createUsers}>Criar</button>
        </div>)}
        {troca && (<div>
          <h2>Listinha Nova de Usuárioss</h2>
          {listaUsuario}
        </div>)}

      </div>
    );
  }

}

