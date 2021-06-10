import React from 'react';
import styled from 'styled-components';


export const Background1 = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right bottom,
    rgb(28,28,28, 0.5),
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
export const ContainerTotal = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');
`
export const AreaAdm = styled.div`
float: left;
padding: 5px;
 p{
  position: relative;
  color: #fff;
  text-decoration: none;  
  margin: 10px 5rem 0 0 ;
  font-size: 1.2rem;
  cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: #fff;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
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
h2{margin: 2rem 0 0 5rem; color: #ffffff; font-size: 1.5rem; cursor: pointer; }
`

export const SubFrase = styled.div`
  position: absolute;
  left: 5rem;
  bottom : 10rem;
  button{
    transition: all .5s ease;
    color: #fff;
    border: 3px solid white;
    font-family:'Montserrat', sans-serif;
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

    &:hover {
    color: #001F3F;
    background-color: #fff;
    }
  }
`