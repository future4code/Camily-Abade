import React from 'react';
import styled from 'styled-components';

export const Login = styled.div`
  width: 50%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center ;
  flex-direction: column;
  border: 1px solid white;
  color: white;
  form{
    height: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
  }
  input{
    height: 100%;
    margin: 0.3rem;
  }
  button{
    height: 3rem;
    margin: 1rem;
    transition: all .5s ease;
    color: #fff;
    border: 2px solid white;
    text-transform: uppercase;
    font-size: 0.9rem;
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

  @media(max-width: 700px) {
    button{
      width: 6rem;
      font-size: 0.7rem;
      padding: 0.8rem;

    }
    h1{
      font-size: 1.5rem; 
    }
  }
  @media(max-width: 576px) {
    width: 70%;
    height: 40vh;
    text-align: center;
    button{
      width: 4rem;
      font-size: 0.7rem;
      padding: 0.8rem;
      margin: 0.4;

    }
    h1{
      font-size: 1.5rem; 
    }
  }
`

export const Container = styled.div`
    margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
  to right bottom,
  rgb(28,28,28, 0.6),
  rgb(28,28,28, 0.6) 
  ),
  url('https://wp.technologyreview.com/wp-content/uploads/2020/01/gettyimages-1168361504-web-5.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerButton = styled.div`
  display: flex;
  background-color: black;
`