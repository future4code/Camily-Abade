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
  
    const candidato = (id, candidatosId, decisao) => {

      const headers = {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
      const body = {
        approve: decisao
      }
      axios.put(`${BASE_URL}/trips/${id}/candidates/${candidatosId}/decide`,body, headers)
      .then((res) => {
        getTripDetail(params, setInformacoes)
      })
      .catch((err) => {
        console.log(err)
      })

    }

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
        return (
          <div>
            <p key={candidatos.id}>{candidatos.name}</p>
            <button onClick={() => candidato (params, candidatos.id, true)}>Aprovar</button>
            <button onClick={() => candidato (params, candidatos.id, false)}>Reprovar</button>
          </div>

        )
      })}
      <h1>CANDIDATOS APROVADOS</h1>
      {informacoes && informacoes.approved && informacoes.approved.map((candidatos) => {
        return (
          <div>
            <p key={candidatos.id}>{candidatos.name}</p>
            
          </div>

        )
      })}
     

    </div>
  )
};