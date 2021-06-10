import React from 'react';
import {useHistory} from "react-router-dom"


export const DetalhesDaViagem = () => {
  const history = useHistory()

  const goToInscricaoPage = () => {
    history.push('/detalhes-inscricao')
  } 

  return( 
    <div>
      oieeee, aqui será as viagens
      <br/>     
      <button onClick={goToInscricaoPage}>INSCREVA-SE</button>
    </div>


  )
};