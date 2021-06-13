import {useHistory} from "react-router-dom"
import { goToPage } from '../routes/coordinator';
import { BASE_URL } from "../Constants/Urls";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import useProtectedPage from '../Hooks/useProtectedPage'
import {ContainerBackground, ContainerViagens, ContainerBotoes, DivTodasViagens} from '../Styled/StyledAdminHome'
export const AdminHomePage = () => {
  const history = useHistory()
  useProtectedPage()
  
  const [listTrip, setListTrip] = useState([{}])

  const PegarViagem =()=>{
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {
      console.log(res.data.trips)
      setListTrip(res.data.trips)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    PegarViagem()
  }, [])

  const logout = () =>{
    localStorage.removeItem("token");
    goToPage(history,"/home")
  }

  const deletarViagem = (id) => {

    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

 
    axios.delete(`${BASE_URL}/trips/${id}`, headers)
    .then(() => {
      console.log('viagem apagada')
      PegarViagem()
    })
    .catch((err) => {
      console.log(err)
    })

  }

  return( 
    <ContainerBackground>
      <ContainerBotoes>
        <button  onClick={() => goToPage(history, '/home')}>Voltar</button>
        <button onClick={() => goToPage(history, '/create-trip')}>Criar Viagem</button>
        <button onClick={logout}>Logout</button>
      </ContainerBotoes>
      <hr/>
      <DivTodasViagens>
      {(listTrip.map(trips => {
      return(
        <ContainerViagens>
          <p>Viagem Postada:</p>
         <p onClick={() => goToPage(history, `/detail-trips/${trips.id}`)}>{trips.name}</p>
         <button onClick={() => deletarViagem(trips.id)}>Remover Viagem</button>
        </ContainerViagens>
      )
    }))}
      </DivTodasViagens>

      <br/>     
    </ContainerBackground>


  )
};