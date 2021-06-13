import React from 'react';
import styled from 'styled-components';


export const ContainerBackground = styled.div`
background-image: linear-gradient(
  to right bottom,
  rgb(28,28,28, 0.6),
  rgb(28,28,28, 0.6) 
  ),
  url('https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center;
`

export const ContainerViagens = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  margin: 1rem;
  border: 4px solid white;
  flex-wrap: wrap;
  padding: 0 0 0 1rem;
  border-radius: 4px; */
    transition: all .5s ease;
    color: #fff;
    border: 2px solid white;
    text-transform: uppercase;
    font-size: 1.2rem;
    background-color : transparent;
    padding: 1rem;
    outline: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
    color: #001F3F;
    background-color: #fff;
    }  
  button{
    border: 2px solid white;
    background-color: transparent;
    cursor: pointer;
    margin: 0 1rem 0 1rem;
    &:hover{
      background-color: red;
    }

  }
`

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`

export const DivTodasViagens = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h3{
    font-size: 2rem;
  }
  
`