import axios from "axios"
import {link, header} from './links';
import ListIcon from '@material-ui/icons/List';
import "./botoes.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const Botoes = (props) => {

  return(
    <div >
      {props.pagina && 
      <div className='containerEntra'>
        <button onClick={props.mudaPagina}><ListIcon color='primary' style={{fontSize:20}} ></ListIcon></button>
      </div>}
      
      {!props.pagina && 
        <div className='containerSai'>
        <button onClick={props.mudaPagina} ><ArrowBackIosIcon  color='primary' style={{fontSize:20}}></ArrowBackIosIcon></button>
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
      <button classeName="limpa" onClick={() => excluir()}><DeleteForeverIcon color='primary' style={{fontSize:20}}></DeleteForeverIcon></button>
    )
}