import React from 'react';
import styled from 'styled-components'


export const Background1 = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');
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
export const ContainerTotal = styled.div``
export const AreaAdm = styled.div`
background: #333;
float: left;
padding: 5px 5px;
margin: 3px;
 a{
  position: relative;
  color: #fff;
  text-decoration: none;  
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
background-image: linear-gradient(
    to right bottom,
    rgb(28,28,28, 0.5),
    rgb(28,28,28, 0.6)
  ),

`

