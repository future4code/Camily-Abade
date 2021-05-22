import React from 'react'; 
import './labefy.css'; 

class Labefy extends React.Component { 
  
  
  render(){ 
    return ( 

      <div className='container'>

        <div className='containerNav'>
          <div className='logo'><h1>Monky</h1></div>
          
          <nav className='nav'>
              <p className='p'>Buscar</p>
              <p className='p'>PlayLisyt</p>
          </nav>
          
          <nav className='sair'>
              <p className='p'>Sair</p>
          </nav>
        </div>

        <div className='containernhe'>
          <div className='navMenu'>
            <a class="block" class="flash-me" >Minhas Músicas</a>
            <a class="block" class="flash-me" >Minhas Playlist</a>
          </div>

          <div className='oie'>
      

          </div>







        </div>

        

      </div>




    ) 
  } 
} 

export default Labefy;