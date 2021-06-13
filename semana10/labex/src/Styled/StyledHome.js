import React from 'react';
import styled from 'styled-components';

export const BackgroundFoguete = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
  to right bottom,
  rgb(28,28,28, 0.6),
  rgb(28,28,28, 0.6) 
  ),
  url('https://wallpaperaccess.com/full/968401.jpg');

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1, h6 {
  font-family: 'Raleway', sans-serif;
  line-height: 2.5rem;
  color: white;
}
`
export const Login = styled.div`
float: left;

 h3{
  position: relative;
  color: #fff;
  margin: 2rem 5rem 0 0 ;
  font-size: 1.4rem;
  cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
    }
    
    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  }
  @media(max-width: 300px) {
      margin: 2rem 2rem 0 0;
    }
 }

`
export const Header = styled.div`
width: 100%;
height: 4rem;
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
h2{margin: 2rem 0 0 5rem; color: #ffffff; font-size: 1.5rem; cursor: pointer; 
@media(max-width: 300px) {
      margin: 2rem 0 0 2rem;
    }
  }

`
export const SubFrase = styled.div`
  position: absolute;
  left: 5rem;
  bottom : 10rem;

  button{
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
  }

  @media(max-width: 800px) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  @media(max-width: 400px) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.9rem;
    button{
    font-size: 0.9rem;
    }
  }

  @media(max-width: 300px) {
    position: absolute;
    bottom: 8rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.7rem;
    button{
    font-size: 0.7rem;
    }
  }
 
`