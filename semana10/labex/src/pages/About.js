import React from 'react';
import {useHistory} from "react-router-dom";
import '../App'
import {Header, ContainerTotal, Background1, SubFrase, Viagens,} from './StyledAbout'



export const About = (props) => {
  const history = useHistory()
  
  const goToHome = () => {
    history.push('/')
  }

  const goBack = () => {
    history.goBack()
  }

  const goToDetalhesPage = () => {
    history.push('/detalhes-viagem')
  } 

  return( 
    <ContainerTotal>
    <Background1>
      <Header>
        <h2>LabeX</h2>
      </Header>
      
      <SubFrase>
        <Viagens onClick={goToDetalhesPage}>
          <p>oie</p>
          <p>nhenhe</p>
        
        </Viagens>  
        <button onClick={props.GetTrip}>Teste Aqui!!</button>        
      </SubFrase>
    </Background1>


  </ContainerTotal>
  )
};