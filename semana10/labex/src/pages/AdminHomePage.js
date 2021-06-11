import {useHistory} from "react-router-dom"
import { goToPage } from '../routes/coordinator';
import { BASE_URL } from "../Constants/Urls";
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const AdminHomePage = () => {
  const history = useHistory()
  
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

  return( 
    <div>
      <button  onClick={() => goToPage(history, '/home')}>Voltar</button>
      <button onClick={() => goToPage(history, '/create-trip')}>Criar Viagem</button>
      <button>Logout</button>
      <div>
      {(listTrip.map(trips => {
      return(
        <div>
         <p onClick={() => goToPage(history, `/detail-trips/${trips.id}`)}>{trips.name}</p>
        </div>
      )
    }))}
      </div>

      <br/>     
    </div>


  )
};