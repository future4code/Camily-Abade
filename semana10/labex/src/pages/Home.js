import React from 'react';
import {useHistory} from "react-router-dom"
import {Header, ContainerTotal, Background1, AreaAdm} from './StyledHome'


export const Home = () => {
  const history = useHistory()
  const goToAboutPage = () => {
    history.push('/about')
  }
  return( 
    <ContainerTotal>
      <Background1>
        <Header>
          <h2>SpaceX</h2>
          <AreaAdm>
            <h5>
              <a href="#">
                Passe o Mouse
              </a>
            </h5>
          </AreaAdm>
          
        </Header>
        <button onClick={goToAboutPage}>ABOUT</button>
        
      </Background1>

    </ContainerTotal>
  )
};