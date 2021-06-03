import React, {UseState, UseEffect} from 'react';
import axios from 'axios';
import {header, link, body} from '../../Assets/links';
import './telaInicial.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



export default function TelaInicial (props) {  

  const likeDeslike = (like) => {

    axios.post(link+'choose-person', body(props.pessoa.id, like), header)
    .then( () => {
      props.pegaPerfil()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <div className='containerInicial'>
      <div className='ContainerPerfil'>
        {props.pessoa.name ? (
          <div>
            <img src={props.pessoa.photo}/>
            <h2>{props.pessoa.name}</h2>
            <h3>{props.pessoa.bio}</h3>
          </div>
        ): (<div className="carregando">Carregando sua lista...</div>)}
      </div>
      <div className='containerBotao'>
        <button onClick={() => likeDeslike(false)}><HighlightOffIcon color='primary' style={{fontSize:40}}></HighlightOffIcon></button>
        <button onClick={() => likeDeslike(true)}><FavoriteIcon color='primary' style={{fontSize:40}} ></FavoriteIcon></button>

      </div>


    </div>
  )
}