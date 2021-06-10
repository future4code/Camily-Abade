import React from 'react';
import {useHistory} from "react-router-dom";
import { goToPage } from '../routes/coordinator';
import {Header, ContainerTotal, Background1, SubFrase, Viagens,} from './StyledAbout'



export const ListTripsPage = () => {
  const history = useHistory()

  return( 
    <ContainerTotal>
    <Background1>
      <Header>
        <h2 onClick={history.goBack}>LabeX</h2>
      </Header>
      
      <SubFrase>
        <Viagens>
          
          <p>oie</p>
          <p>nhenhe</p>
        
        </Viagens>  
        <button onClick={null}>Teste Aqui!!</button>        
      </SubFrase>
    </Background1>


  </ContainerTotal>
  )
};