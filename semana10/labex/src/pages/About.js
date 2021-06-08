import React from 'react';
import {useHistory} from "react-router-dom"


export const About = () => {
  const history = useHistory()
  
  const goToHome = () => {
    history.push('/')
  }

  const goBack = () => {
    history.goBack()
  }

  return( 
    <div>
      <h2>Sou a pagina de Abouuuuuuuuuuut</h2>
      <button onClick={goToHome}>HOME</button>
      <button onClick={goBack}>ULTIMA TELA</button>

    </div>
  )
};