import axios from "axios"
import {link, header} from './links';



export const Botoes = (props) => {

  return(
    <div>
      {props.pagina && 
      <div>
        <h2>Sou o Astro!!</h2>
        <button onClick={props.mudaPagina}>Entrar</button>
      </div>}
      
      {!props.pagina && 
        <div>
        <button onClick={props.mudaPagina} >Sair</button>
        <h2>Sou o Astro!!</h2>
      </div>}
    </div>

  )
}

export const ExcluirMatch = (props) => {
  const excluir = () => {
    axios.put(link+`clear`, header)
    .then( () => {
      alert('Você excluiu seus Matches')
      props.mudaPagina()
      })
      .catch((err) => {
        console.log(err)
      })
  }

    return(
      <button onClick={() => excluir()}>Limpar swipes e matches</button>
    )
}