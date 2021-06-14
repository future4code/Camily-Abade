import React from 'react';
import styled from 'styled-components';


export const ContainerTotal  = styled.div`
  background-image: linear-gradient(
  to right bottom,
  rgb(28,28,28, 0.6),
  rgb(28,28,28, 0.6) 
  ),
  url('https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  max-height: auto;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const  ContainerViagem = styled.div`
  width: 80%;
  height: auto;
  margin-top: 2rem;
    div{
      color: white;
      background-color: rgb(255,255,255, 0.3);
      padding: 1rem 0 1rem 0 ;
    }
    button{
      height: 2rem;
      background-color: transparent;
      border: 2px solid white;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      margin: 0.2rem;
      &:hover{
        background-color: #001F3F;
        color: white;
        border: none;
      }
  }


`

export const Candidatos = styled.div`
  display: flex;
  width: auto;
  text-align: center;
  h2{
    color:white;
  }
  @media(max-width: 810px) {
     width: 80%;
     display: flex;
    flex-direction: column;
    align-items: center;
    }
`

export const CandidatosPendentes  = styled.div`
  border: 2px solid white;
  margin: 1rem;
  height: auto;
  max-height: 30rem;
  min-height: 8rem;
  width: 20rem;
  overflow-y:hidden; 
  overflow:scroll; 
  ::-webkit-scrollbar {
    display: none;
  }
  @media(max-width: 655px) {
    width: 100%;
    max-height: 20rem;

    }
`

export const  CandidatosAprovados = styled.div`
border: 2px solid white;
  margin: 1rem;
  height: auto;
  min-height: 8rem;
  max-height: 30rem;
  width: 20rem;
  overflow-y:hidden; 
  overflow:scroll; 
  ::-webkit-scrollbar {
    display: none;
  }

  div{
    background-color: rgb(255,255,255, 0.3);
  width: auto;
  text-align: left;
  color: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  overflow: hidden;
  }
  @media(max-width: 655px) {
    width: 100%;
    max-height: 20rem;
    }
`

export const ContainerCandidato = styled.div`
  background-color: rgb(255,255,255, 0.3);
  width: auto;
  text-align: left;
  color: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  overflow: hidden;

  button{
      height: 2rem;
      background-color: transparent;
      border: 2px solid white;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      margin: 0.2rem;
      &:hover{
        background-color: #001F3F;
        color: white;
        border: none;
      }
  }
  
`