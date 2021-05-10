import React from 'react';
import './index.css';

class Etapa1 extends React.Component {
  render(){
    return (
      <div className='containerTudo'>
        <h1>ETAPA 1 - DADOS GERAIS </h1>
        <p>1. Qual o seu nome?</p>
        <input placeholder='Nome'/>
        <p>2. Qual sua idade?</p>
        <input type={Number} placeholder='Idade'/>
        <p>3. Qual seu email?</p>
        <input  placeholder='Email'/>
        <p>4. Qual a sua escolaridade</p>
        <select>
          <option value='EnsMedIn'>Ensino médio incompleto</option>
          <option value='EnsMedCom'>Ensino médio completo</option>
          <option value='EnsSupIn'>Ensino superior incompleto</option>
          <option value='EnsSupCom'>Ensino superior completo</option>
        </select>
        <br/>
        <br/>
        <button onClick={this.props.mudaAPagina}>Próxima Etapa</button>
      </div>
  )

  }


  
}

export default Etapa1;
