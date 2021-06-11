import React from 'react';
import styled from 'styled-components';


export const Background1 = styled.div`
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
  url('https://hypescience.com/wp-content/uploads/2014/07/ver-a-terra-do-espaco.jpg');
  background-size: cover;
  background-position: center;
  display: flex;

  h1, h6 {
  font-family: 'Raleway', sans-serif;
  line-height: 2.5rem;
  color: white;
}
`
export const ContainerTotal = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');
`

export const Header = styled.div`
width: 100%;
height: 4rem;
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
h2{margin: 2rem 0 0 5rem; color: #ffffff; font-size: 1.5rem; cursor: pointer; }
`

export const SubFrase = styled.div`
`
export const ContainerViagens = styled.div`
  display: flex;
  margin: 6rem;
`

export const Viagens = styled.div`

    width: 200px;
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
    }
`

export const P = styled.p`
    padding: 1rem 0 1rem 0;
  &&:hover{
    background-color: none;
    width: 100%;
    padding: 1rem 0 1rem 0 ;
  }

`