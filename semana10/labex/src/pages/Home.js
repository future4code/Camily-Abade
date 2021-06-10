import React from 'react';
import {useHistory} from "react-router-dom"
import {Header, ContainerTotal, Background1, AreaAdm, SubFrase,} from './StyledHome'


export const Home = () => {
  const history = useHistory()
  const goToAboutPage = () => {
    history.push('/about')
  }
  
  const goToLogin = () => {
    history.push('/login')
  }

  return( 
    <ContainerTotal>
      <Background1> 
        <Header>
          <h2>LabeX</h2>
          <AreaAdm>
            <h5>
              <p onClick={goToLogin}>
                LogIn
              </p>
            </h5>
          </AreaAdm>
        </Header>
        <SubFrase>
          <h1>O céu era o limite</h1>
          <h1>E nós ultrapassamos ele</h1>
          <button onClick={goToAboutPage}>Viagens Abertas</button>          
        </SubFrase>
      </Background1>


    </ContainerTotal>
  )
};