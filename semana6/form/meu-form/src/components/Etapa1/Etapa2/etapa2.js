import React from 'react';
import './index.css';

class Etapa2 extends React.Component {
  render(){
    return (
      <div className='containerTudo'>
        <div className='containerInput'> 
          <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h1>
          <p>5. Qual curso?</p>
          <input placeholder='Nome do curso' />
          <p>6. Qual a unidade de ensino?</p>
          <input placeholder='Instituição de ensino'/>
          <br/>
          <br/>
          <button onClick={this.props.mudaAPagina}>Próxima Etapa</button>
        </div>  
      </div>
  )

  }


  
}

export default Etapa2;
