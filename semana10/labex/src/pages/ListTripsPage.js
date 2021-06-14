import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import { goToPage } from '../routes/coordinator';
import {Header, Background, ContainerViagens ,Viagens} from '../Styled/StyledAbout'
import { BASE_URL } from "../Constants/Urls";
import axios from 'axios';

export const ListTripsPage = () => {
  const history = useHistory()
  const [listTrip, setListTrip] = useState([{}])


  const PegarViagem =()=>{
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {
      setListTrip(res.data.trips)
    })
    .catch((err) => {
    })
  }

  useEffect(() => {
    PegarViagem()
  }, [])




  return( 
    <>
    
      <Background>
        <Header>
          <h2 onClick={history.goBack}>LabeX</h2>
        </Header>
        
        <ContainerViagens>
            {(listTrip.map(trips => {
      return(
        <Viagens onClick={() => goToPage(history, '/application-form')}>
         <p>Planeta: {trips.planet}</p>
         <p>{trips.name}</p>
         <p>Data: {trips.date}</p>
          <p>Duração da viagem: {trips.durationInDays} dias</p>
          <button onClick={() => goToPage(history, '/application-form')}>Clique aqui e Inscreva-se</button>
        </Viagens>
      )
    }))}
          
        </ContainerViagens>  

      </Background>


    </>
  )
};