import {useHistory} from "react-router-dom";
import { goToPage } from '../routes/coordinator';
import useForm from '../Hooks/UseForm';
import { BASE_URL } from "../Constants/Urls";
import axios from 'axios';
import React, { useEffect, useState } from 'react';





export const CreateTripPage = () => {
  const history = useHistory()
  
  const {form, onChange, cleanFields } = useForm({
    nome: "",
    descricao: "",
    duracao: '',
    planeta: '',
    data: ''
  });

  const data = () => {
    const funcaoData = new Date(Date.now()).toLocaleString().slice(0,10);
    const dia = funcaoData.slice(0,2)
    const mes = funcaoData.slice(3,5)
    const ano = funcaoData.slice(6, 10)
    const dataDeHoje = `${dia}-${mes}-${ano}`
    return dataDeHoje
  }
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }


  const dia = form.data.slice(8, 10)
  const mes = form.data.slice(5, 7)
  const ano = form.data.slice(0, 4)
  const dataDeHoje = `${dia}/${mes}/${ano}`

  const body = {
    
      name: form.nome,
      planet: form.planeta,
      date: dataDeHoje,
      description: form.descricao,
      durationInDays: Number(form.duracao)
  }

  const cadastrar = (event) => {
    event.preventDefault();

    console.log("Formulário enviado!", headers, body)


    axios.post(`${BASE_URL}/trips`, body, headers)
    .then(() => {
    console.log('ENTROU AQUI')
      
      })
    .catch((err) => {
      console.log(err.response.data, 'deu erro auqui ein')
    })
      
    cleanFields();
  };



  return( 
    <div>
      <button onClick={history.goBack}>Voltar</button>
      <h2>Sou a pagina de criação</h2>
      <form onSubmit={cadastrar}>

        <input
          name={"nome"}
          value={form.nome}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"[a-z]]{3,}$"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
          <select
        name={'planeta'}
        value={form.planeta}
        onChange={onChange}
        required
        >
        <option value='' disabled selected >Selecione uma Planeta</option>
        <option value="Mercúrio">Mercúrio</option>
        <option value="Marte">Marte</option>
        <option value="Júpiter">Júpiter</option>
        <option value="Saturno">Saturno</option>
        <option value="Urano">Urano</option>
        <option value="Netuno">Netuno</option>
      </select>

      <input 
        name={'data'}
        value={form.data}
        onChange={onChange}
        type={"date"}
        min={data()}
        pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
        required
      />
       <input
          name={"descricao"}
          value={form.descricao}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"[a-z]]{15,}$"}
          title={"A descrição deve ter no mínimo 10 letras"}
        />

        <input
          name={"duracao"}
          value={form.duracao}
          onChange={onChange}
          placeholder="Duração em dias"
          required
          type={"number"}
        />
      </form>

    <button onClick={cadastrar}>Add nova Viagem</button>
    </div>
  )
};