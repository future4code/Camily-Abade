import React, {UseState, UseEffect} from 'react';
import axios from 'axios';
import {header, link, body} from '../../Assets/links';
import './telaInicial.css'


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
    <div>
      <div>Sou a Tela Inicial</div>
      {props.pessoa.name ? (
        <div>
          <p>{props.pessoa.name}</p>
          <img src={props.pessoa.photo}/>
          <p>{props.pessoa.bio}</p>
        </div>
      ): (<div>Carregando sua lista...</div>)}
      <button onClick={() => likeDeslike(false)}>Deslike</button>
      <button onClick={() => likeDeslike(true)}>Like</button>


    </div>
  )
}