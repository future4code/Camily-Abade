import React from 'react';
import {useHistory} from "react-router-dom";
import useForm from '../Hooks/UseForm';
// import styled from 'styled-components';
// import {ContainerTotal, LogIn, Img} from './StyledLoginPage'
// import useForm from "../Hooks/UseForm";
// import { BASE_URL } from "../Constants/urls";
import {goToPage} from '../routes/coordinator'
import { BASE_URL } from "../Constants/Urls";
import axios from 'axios';

export const LoginPage = () => {
  const history = useHistory()
  const goToAdm = () => {
    history.push('/admin-home')
  }

  const {form, onChange, cleanFields} = useForm ({
    email: '',
    password: '',
  })

  const cadastrar = (event) => {
    event.preventDefault();

    axios.post(`${BASE_URL}/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToPage(history, '/admin-home')
    })
    .catch((err) => {
      console.log(err)
    })
    cleanFields();
  }

  return( 
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrar}>
        <input
        name={'email'}
          value={form.email}
          onChange={onChange}
          placeholder="email"
          requiredpattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
          title={'o email deve ser do tipo texto@texto.com'}
        />
        <input
          name={'password'}
          value={form.password}
          onChange={onChange}
          placeholder="senha"
          requiredpattern={"^.{6,}"}
          title={'Sua senha deve ter no mínimo 6 caracteres'}
        />
        <button  onClick={cadastrar}>Cadastrar</button>
      </form>
  </div>

  )
};