import React from 'react';
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import {goToPage} from '../routes/coordinator'

const Container = styled.div`
background-image: linear-gradient(
    to right bottom,
    rgb(28,28,28, 0.5),
    rgb(28,28,28, 0.6)
  ),
  url('https://image.freepik.com/vetores-gratis/404-conceito-de-erro-com-astronauta-plano_23-2147738893.jpg');
  background-position: center;
  max-height: auto;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  h1{color: white; cursor: pointer}
  button{
    width: 10rem;
    height: 4rem;
    background-color: white;
    border: none;
    margin: 1rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      background-color: transparent;
      border: 2px solid white;
      color: white;
    }
  }
  `


export const ErrorPage = () => {
  const history = useHistory()

  
  
  return( 
    <Container>
      <button onClick={() => goToPage(history, '/home')}>Volte para a Home amigão :)</button>
      <h1 onClick={() => goToPage(history, '/home')}>LabeX</h1>

    </Container>
  )
};