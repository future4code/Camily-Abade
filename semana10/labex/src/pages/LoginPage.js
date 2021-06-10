import React from 'react';
import {useHistory} from "react-router-dom"
import styled from 'styled-components';

const ContainerTotal = styled.div `
  width: 100%;
  display: flex;

`
const LogIn = styled.div `
  width: 50%;

`
const Video = styled.div `
  width: 50%;
  

`

export const Login = () => {
  const history = useHistory()
  const goToAdm = () => {
    history.push('/adm-viagens')
  }
  


  return( 
    <ContainerTotal>
      <LogIn>
        oie
      </LogIn>
      <Video>
      </Video>     
      <button onClick={goToAdm}>entrar</button>
    </ContainerTotal>


  )
};