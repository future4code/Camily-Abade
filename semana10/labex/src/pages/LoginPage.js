import React from 'react';
import {useHistory} from "react-router-dom";
// import styled from 'styled-components';
// import {ContainerTotal, LogIn, Img} from './StyledLoginPage'
// import useForm from "../Hooks/UseForm";
// import { BASE_URL } from "../Constants/urls";
import {goToPage} from '../routes/coordinator'




export const LoginPage = () => {
  const history = useHistory()
  const goToAdm = () => {
    history.push('/admin-home')
  }



  return( 
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={null}>
        <input
          value={null}
          onChange={null}
          placeholder="email"
        
        />
      
        <input
          name={"Senha"}
          value={null}
          onChange={null}
          placeholder="Senha"
   
        />
        <button  onClick={() => goToPage(history, '/admin-home')}>Cadastrar</button>
      </form>
  </div>

  )
};