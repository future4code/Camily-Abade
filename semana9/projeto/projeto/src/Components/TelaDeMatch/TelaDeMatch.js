import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link} from '../../Assets/links';
import {ExcluirMatch} from '../../Assets/botoes';
import "./telaDeMatch.css"


export default function TelaDeMatch (props) {
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
    <div className='oi'>
      
      { listaMatch[0] ? (listaMatch.map(listaDeMatch => {
        return(
          <div className="containerMatch">
            <img className="fotoPerfil" src={listaDeMatch.photo} alt='foto da pessoa'/>
            <p>{listaDeMatch.name}</p>
          </div>

        )
      })) : (<div className="carregando">Estou carregando, espere! Ou não espere pq talvez não haja nomes...</div>)}
      <div className='ContainerBotaoExcluir'>
        <ExcluirMatch mudaPagina={props.mudaPagina}/>

      </div>


    </div>
    
  )
}