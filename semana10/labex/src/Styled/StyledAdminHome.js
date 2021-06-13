import React from 'react';
import styled from 'styled-components';


export const ContainerBackground = styled.div`
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
`

export const ContainerViagens = styled.div`
    width: 12rem;
    min-height: 10rem;
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
    margin: 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover {
    color: #001F3F;
    background-color: #fff;
    button{
      height: 2rem;
      background-color: transparent;
      border: 2px solid #001F3F;
      border-radius: 4px;
      color: #001F3F;
      cursor: pointer;
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
        border: 2px solid black;
      }
    }
    @media(max-width: 500px) {
      margin: 1rem 0 1rem 0;
    width: 16rem;
    min-height: 5rem;
    height: auto;
    text-align: left;
  }

`

export const ContainerBotoes = styled.div`
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      button{
      height: 2rem;
      background-color: white;
      border: 2px solid white;
      border-radius: 4px;
      color: #001F3F;
      cursor: pointer;
      &:hover{
        background-color: transparent;
        color: white;
        border: 2px solid white;
        }
      }
`
export const DivTodasViagens = styled.div`
 justify-content: space-evenly;
  display: flex;
  margin: 3rem;
  flex-wrap: wrap;
  h3{
    font-size: 2rem;
  }
  
`