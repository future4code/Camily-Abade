import React from 'react'
import styled from 'styled-components';

export const ContainerTotal = styled.div`
   margin: 0;
  padding: 0;
  max-height: auto;
  min-height: 100vh;
  max-width: 100vw;
  background-image: linear-gradient(
    to right bottom,
    rgb(28,28,28, 0.5),
    rgb(28,28,28, 0.6)
  ),
  url('https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  color: white;
  @media(max-width: 400px) {
   h1{
     font-size: 1.4rem;
   }
    width: 100%;
  }

`

export const ContianerFormulario = styled.div`
  background-color: rgb(255,255,255, 0.3);
  width: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    cursor: pointer;
  }
  form{
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input{
    width:  80%;
    height: 2rem;
    margin: 0.3rem;;
  }
  select{
    width:  81%;
    height: 2rem;
    margin: 0.3rem;;
  }
  button{
    background-color: transparent;
    border: 2px solid white;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    color: white;
    &:hover{
      background-color: darkblue;
      color: white;
      border: none;
    }
    @media(max-width: 400px){
      width: 7rem;
      font-size: 0.8rem;
      padding: 0.5rem;
    }
    }
  }
  @media(max-width: 726px) {
    width: 100%;
  }
`




