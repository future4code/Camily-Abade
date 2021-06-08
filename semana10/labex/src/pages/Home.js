import React from 'react';
import {useHistory} from "react-router-dom"

export const Home = () => {
  const history = useHistory()
  const goToAboutPage = () => {
    history.push('/about')
  }
  return( 
    <div>
      <h2>Sou a pagina de HOMEEEEEE</h2>
      <button onClick={goToAboutPage}>ABOUT</button>

    </div>
  )
};