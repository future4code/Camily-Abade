import axios from 'axios';
import React from 'react'; 
import './labefy.css'; 

class Labefy extends React.Component { 
  
  criaPlayList() => {
    axios.post
  }


  
  render(){ 
    return ( 

      <div className='container'>

        <div className='containerNav'>
          <div className='logo'><h1>Monky</h1></div>
          
          <nav className='nav'>
              <input className='input' placeholder='Buscar...' input/>
              <p className='p'onClick={criaPlayList}>PlayLisyt</p>
          </nav>
          
          <nav className='sair'>
              <p className='p'>Sair</p>
          </nav>
        </div>

        <div className='containernhe'>
          <div className='navMenu'>
            <a class="block" >Minhas Músicas</a>
            <a class="block" >Minhas Playlist</a>
          </div>

          <div className='oie'>
      

          </div>







        </div>

        

      </div>




    ) 
  } 
} 

export default Labefy;