import React from 'react';
import {useHistory} from "react-router-dom"
import {goToPage} from '../routes/coordinator'
import {BackgroundFoguete, Header, Login, SubFrase} from '../Styled/StyledHome'


export const HomePage = () => {
  const history = useHistory()

  const fazerLogin = () => { //Funcao para quando estiver logado não ir para a pagina de login
    if(localStorage.getItem("token")){
      goToPage(history, '/admin-home')
    } else{
      goToPage(history, '/login')
    }
  }
  return( 
    <>
      <BackgroundFoguete> 
        <Header>
          <h2>LabeX</h2>
          <Login>
              <h3 onClick={fazerLogin}>
                LogIn
              </h3>
          </Login>
        </Header>
        <SubFrase>
          <h1>O céu era o limite</h1>
          <h1>E nós ultrapassamos ele</h1>
          <button onClick={() => goToPage(history, '/list-trips')}>Viagens Abertas</button>          
        </SubFrase>
      </BackgroundFoguete>
    </>
  )
};