import React from 'react';
import {useHistory} from "react-router-dom"
import {goToPage} from '../routes/coordinator'
import {ContainerTotal, Background1, Header, AreaAdm, SubFrase} from './StyledHome'


export const HomePage = () => {
  const history = useHistory()

  const fazerLogin = () => {
    if(localStorage.getItem("token")){
      goToPage(history, '/admin-home')
    } else{
      goToPage(history, '/login')
    }
  }

  return( 
    <ContainerTotal>
      <Background1> 
        <Header>
          <h2>LabeX</h2>
          <AreaAdm>
            <h5>
              <p onClick={fazerLogin}>
                LogIn
              </p>
            </h5>
          </AreaAdm>
        </Header>
        <SubFrase>
          <h1>O céu era o limite</h1>
          <h1>E nós ultrapassamos ele</h1>
          <button onClick={() => goToPage(history, '/list-trips')}>Viagens Abertas</button>          
        </SubFrase>
      </Background1>


    </ContainerTotal>
  )
};