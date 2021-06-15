import React from 'react';
import styled from 'styled-components';


export const Background = styled.div`
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
  h1, h6 {
  line-height: 2.5rem;
  color: white;
}
`

export const Header = styled.div`
width: 100%;
height: 4rem;
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
h2{margin: 2rem 0 0 5rem; color: #ffffff; font-size: 1.5rem; cursor: pointer; }
@media(max-width: 520px) {
  margin: 0;
  h2{
    font-size: 2rem;
    }
  }
`

export const ContainerViagens = styled.div`
  justify-content: space-evenly;
  display: flex;
  margin: 6rem;
  flex-wrap: wrap;

  @media(max-width: 520px) {
     margin: 4rem 0 0 0;
  }

`

export const Viagens = styled.div`

    width: auto;
    height: auto;
    text-align: left;
    transition: all .5s ease;
    color: #fff;
    border: 3px solid white;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    font-size: 17px;
    background-color : transparent;
    padding: 1rem;
    outline: none;
    border-radius: 4px;
    font-family: 'Raleway', sans-serif;
    cursor: pointer;
    margin: 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

    &:hover {
    color: #001F3F;
    background-color: #fff;
    button{
        color: white;
        border: 2px solid #001F3F;
        color: #001F3F;
      }
    }

    button{
      height: 2rem;
      background-color: transparent;
      border: 2px solid white;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      &:hover{
        background-color: #001F3F;
        color: white;
      }
    }

    @media(max-width: 520px) {
      width: 50%;
  }
`
