import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import TelaDeMatch from '../TelaDeMatch/TelaDeMatch';
import TelaInicial from '../TelaInicial/TelaInicial';
import {Botoes, ExcluirMatch} from '../../Assets/botoes';
import {link} from '../../Assets/links';



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
    <div>
      <Botoes mudaPagina={mudaPagina} pagina={pagina}/>
      {pagina && <TelaInicial pessoa={pessoa} pegaPerfil={() => pegaPerfil()} />}
      {!pagina && <TelaDeMatch pessoa={pessoa}/>}
      <ExcluirMatch mudaPagina={mudaPagina}/>

    </div>
  );
}

export default Container;
