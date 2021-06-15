import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import TelaDeMatch from '../TelaDeMatch/TelaDeMatch';
import TelaInicial from '../TelaInicial/TelaInicial';
import {Botoes, ExcluirMatch} from '../../Assets/botoes';
import {link} from '../../Assets/links';
import './container.css'


function Container() {
  const [pagina, setPagina] = useState(true)
  const [pessoa, setPessoa] = useState({})


  const mudaPagina = () => {
    setPagina(!pagina)
  }

  const pegaPerfil = () => {

    axios.get(link+'person')
    .then( (res) => {
    setPessoa(res.data.profile)

    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    pegaPerfil() 
  }, [])



  return (
    <div className='container'>
      {pagina && <TelaInicial pessoa={pessoa} pegaPerfil={() => pegaPerfil()} />}
      {!pagina && <TelaDeMatch pessoa={pessoa}/>}
      <Botoes mudaPagina={mudaPagina} pagina={pagina}/>

    </div>
  );
}

export default Container;
