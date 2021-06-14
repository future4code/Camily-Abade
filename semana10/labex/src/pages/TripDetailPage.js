import {useHistory, useParams} from "react-router-dom"
import { goToPage } from '../routes/coordinator';
import { BASE_URL } from "../Constants/Urls";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ContainerTotal, ContainerViagem, Candidatos, CandidatosPendentes, CandidatosAprovados, ContainerCandidato} from '../Styled/StyledTripDetail'
import useProtectedPage from '../Hooks/useProtectedPage'




export const TripDetailsPage = () => {
  useProtectedPage()

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
      })

    }

  return( 
    <ContainerTotal>
      <ContainerViagem>
        <div>
          <button onClick={history.goBack}>Voltar</button>
          <h2>Detalhes da Viagem</h2>
          <p>Nome: {informacoes.name}</p>
          <p>Descrição: {informacoes.descriptions}</p>
          <p>Planeta: {informacoes.planet}</p>
          <p>Duração em dias: {informacoes.durationInDays}</p>
          <p>Data: {informacoes.date}</p>
        </div>
      </ContainerViagem>

      <Candidatos>

        <CandidatosPendentes>
          <h2>Candidatos Pendentes</h2>
          {informacoes && informacoes.candidates && informacoes.candidates.map((candidatos) => {
            return (
              <div>
                <ContainerCandidato>
                  <p key={candidatos.id}>{candidatos.name}</p>
                  <p key={candidatos.id}>{candidatos.age} anos</p>
                  <p key={candidatos.id}>{candidatos.applicationText}</p>
                  <p key={candidatos.id}>{candidatos.profession}</p>
                  <p key={candidatos.id}>{candidatos.country}</p>
                  <button onClick={() => candidato (params, candidatos.id, true)}>Aprovar</button>
                  <button onClick={() => candidato (params, candidatos.id, false)}>Reprovar</button>

                </ContainerCandidato>

              </div>
            )
          })}
        </CandidatosPendentes>

        <CandidatosAprovados>
          <h2>Candidatos Aprovados</h2>
          {informacoes && informacoes.approved && informacoes.approved.map((candidatos) => {
            return (
              <div>
                <p key={candidatos.id}>{candidatos.name}</p>
                
              </div>

            )
          })}
        </CandidatosAprovados>
      

      </Candidatos>

    </ContainerTotal>
  )
};