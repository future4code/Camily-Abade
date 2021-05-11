import React from 'react';
import './index.css';

class Etapa3 extends React.Component {
  render(){
    return (
      <div className='containerTudo'>
        <div className='containerInput'>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <p>7. Por que você não terminou um curso de graduação?</p>
          <input placeholder='Nome'/>
          <p>8. Você fez algum curso complementar?</p>
          <select>
            <option value='None'>Nenhum</option>
            <option value='cT'>Curso Técnico</option>
            <option value='cI'>Curso de Inglês</option>
          </select>
          <br/>
          <br/>
          <button onClick={this.props.mudaAPagina}>Próxima Etapa</button>
      </div>
      </div>
  )

  }


  
}

export default Etapa3;
