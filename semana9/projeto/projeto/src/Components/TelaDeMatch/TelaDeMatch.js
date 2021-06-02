import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link} from '../../Assets/links';

export default function TelaDeMatch () {
  const [listaMatch, setListaMatch] = useState([])

  const listaMatchs = () => {
    axios.get(link+'matches')
    .then( (res) => {
    setListaMatch(res.data.matches)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    listaMatchs() 
  }, [])

  return(
    <div>

      { listaMatch[0] ? (listaMatch.map(listaDeMatch => {
        return(
          <p>{listaDeMatch.name}</p>
        )
      })) : (<div>Estou carregando, espere! Ou não espere pq talvez não haja nomes...</div>)}

    </div>
    
  )
}