import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import { goToPage } from '../routes/coordinator';
import {Header, ContainerTotal, Background1, SubFrase, ContainerViagens ,Viagens, P} from './StyledAbout'
import { BASE_URL } from "../Constants/Urls";
import axios from 'axios';

export const ListTripsPage = () => {
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




  return( 
    <ContainerTotal>
    
      <Background1>
        <Header>
          <h2 onClick={history.goBack}>LabeX</h2>
        </Header>
        
        <SubFrase>
          <ContainerViagens onClick={PegarViagem}>
            {(listTrip.map(trips => {
      return(
        <Viagens>
         <p>{trips.planet}</p>
         <p>{trips.name}</p>
         <p>Data: {trips.date}</p>
          <p>Duração da viagem: {trips.durationInDays}dias</p>
        </Viagens>
      )
    }))}
          
          </ContainerViagens>  
        <button onClick={() => goToPage(history, '/application-form')}>Inscrever-se</button>

        </SubFrase>
      </Background1>


    </ContainerTotal>
  )
};