import {useHistory, useParams} from "react-router-dom"
import { goToPage } from '../routes/coordinator';
import { BASE_URL } from "../Constants/Urls";
import React, { useEffect, useState } from 'react';
import axios from 'axios';




export const TripDetailsPage = () => {
  const history = useHistory()
  const params = useParams().id
  const [informacoes, setInformacoes]= useState({})




  
  const getTripDetail = (id) => {
    
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    axios
    .get(`${BASE_URL}/trip/${id}`, headers)
    .then((res) => {
    console.log(res.data.trip)
    setInformacoes(res.data.trip)
      const list = res.data;
      return list;
    })
    .catch((err) => {
        alert(err.response.data.message);
        return "fail"
    })
  }
  useEffect(() => {
      getTripDetail(params, setInformacoes)
  }, [])
  



  return( 
    <div>
      <button onClick={history.goBack}>Voltar</button>
      <h2>Sou a pagina de detalhes da viagem, bem como terei as inscrições</h2>
      <h1>VIAGEM</h1>
      <p>Nome: {informacoes.name}</p>
      <p>Descrição: {informacoes.descriptions}</p>
      <p>Planeta: {informacoes.planet}</p>
      <p>Duração em dias: {informacoes.durationInDays}</p>
      <p>Data: {informacoes.date}</p>

      <h1>CANDIDATOS PENDENTES</h1>
      {informacoes && informacoes.candidates && informacoes.candidates.map((candidatos) => {
        return <p key={candidatos.id}>{candidatos.name}</p>
      })}
      <h1>CANDIDATOS APROVADOS</h1>


    </div>
  )
};