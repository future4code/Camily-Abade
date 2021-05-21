import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    activity: {}
  }

  getActivity = () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res) => {
      console.log(res.data)
      this.setState({activity: res.data})
    })
    .catch((err) => {
      console.log(err)
    })

    
    const options = {
      method: 'GET',
      url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
      params: {
        q: `${this.state.activity.activity} 
        ${this.state.activity.type} 
        ${this.state.activity.price}`,
        langpair: 'en|pt-br'
      },
      headers: {
        'x-rapidapi-key': '9db062bfa4mshdb39e3ddd70f344p1f6774jsnd14d409a80d9',
        'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.responseData);
      this.setState({activity: response.data.responseData})
      
    }).catch(function (error) {
      console.error(error);
    });
  }

  render () {

    const {activity, type, price} = this.state.activity
    return (
      <div className='container'>
        <div className='containerMenu'>
          <h1>Vá caçar o que fazer!!!</h1>
          <h2>Oou... Deixa que eu faço isso por você e</h2>
          <button onClick={this.getActivity}>Clique Aqui! </button>
        </div>

        <div className='containerPostIt'>
          <h3>Atividade Pra vc!</h3>
          <p>Nome: {activity}</p>
          <p>Tipo: {type}</p>
        </div>

        <footer>@Camily Abade</footer>

      </div>
    )
  }
}

