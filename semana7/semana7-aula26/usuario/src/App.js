import logo from './logo.svg';
import React from 'react'
import './App.css';
import axios from 'axios';


const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/"

export default class App extends React.Component {  

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {
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

      this.setState({inputName:'', inputEmail: ''});      
    

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
      alert('Não Foi possível criar o usuário', err)
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
  }

  trocaPagina = () => {
    this.setState({trocaPagina: !this.state.trocaPagina})
  }

  
  render () {
    const listaUsuario = this.state.listaUsuario.map((usuario) => {
      return (
        <div className='containerDeletar'>
          <li>{usuario.name}</li>
          <button className='botaoDeletar' onClick={() => this.deletar(usuario.id)}>X</button>
        </div>  
      )
    })
    const troca = this.state.trocaPagina
    return (

      <div className='container'>
        <div className='menu'>
          <h1 className='h1yellow'>Laben</h1>
          <h1 className='h1red'>Users</h1>
        </div>

  
          
        {!troca && (<div>

          <div className='containerPagina1'>
          <div className='containerP'>
            <p className='p1'>Crie o seu usário</p>
            <p className='p2'>Informe seus dados abaixo para criar um usuário</p>
          </div>
        </div>


          <div className='containerInput'>
            <input value={this.state.inputName} onChange={this.handleName} placeholder='Nome'></input>
            <input value={this.state.inputEmail} onChange={this.handleEmail} placeholder='E-mail'></input>
          </div>
         
         <div className='containerButton'>
         <button className='criarUsuario' onClick={this.createUsers}>Criar</button>
        <button  className='vizualizarPagina' onClick={this.trocaPagina}>Vizualizar Usuários</button>
         </div>

        </div>)}

        
        

        {troca && (<div className='segundaPagina'>
            <h2>Usuários Criados</h2>
            {listaUsuario}
            <button  className='criarNovoUsuario' onClick={this.trocaPagina}>Criar Novo Usuário</button>
        </div>)}

        <footer>
          <p>Linkedin: Camily Abade</p>
        </footer>

      </div>
    );
  }

}

