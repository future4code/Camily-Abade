import axios from 'axios';
import React from 'react'; 
import './labefy.css'; 

class Labefy extends React.Component { 
  
  state = {
    inputNovaPlaylist: '',
    arrayDePlaylists: [],

    inputName: '',
    inputArtist: '',
    inputUrl: '',

    playlistSelecionada: '' 
  }

  handleNovaPlaylist = (e) => {
    this.setState({inputNovaPlaylist: e.target.value})
    console.log('oie, vc escreveu algo no input') // Tudo ok aqui
  }
  header = {
    headers: {
      'Content-Type': 'application/json', 'Authorization': 'camily-abade-paiva'
    }
}


  handleName = (e) => {
    this.setState({inputName: e.target.value})

  }

  handleArtist = (e) => {
    this.setState({inputArtist: e.target.value})

  }

  handleUrl = (e) => {
    this.setState({inputUrl: e.target.value})

  }




  createPlaylist = () => {
    const body = {
      'name': this.state.inputNovaPlaylist
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, this.header )
    .then(() => {
      alert('PLAYLIST CRIADAAAAAAAAAAAAAAAAA, YAUUUUUUUUUUUUUUU')
      this.setState({inputNovaPlaylist:""})
    })
    .catch((err) => {
      alert('Erro para criar a playlist', err)
      this.setState({inputNovaPlaylist:""})
    })
  }

  getPlaylists = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, this.header)
    .then((res) => {
      this.setState({arrayDePlaylists: res.data.result.list})
      console.log(this.state.arrayDePlaylists)
    })
    .catch((err) => {
      console.log('Não foi possível pegar as playlists')
    })
  }

  deletaPlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, this.header)
    .then((res) => {
      alert(`A playlist foi deletada com sucesso`)
      this.getPlaylists()
      console.log(res)
    })
    .catch((err) => {
      alert(`Não foi possível deletar a playlist`)
    })
  }

  getPlaylistTracks = (id) => {
    this.setState({playlistSelecionada: id})
    console.log(this.header)
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, this.header)
    .then((res) => {
    console.log(res.data.result)
    })
    .catch(() => {
      alert('ERROR ao pegar detalhes da playlist')
    })
  }

  addTrackToPlaylist = () => {
    const body = {
      
        "name": this.state.inputName, 
        "artist": this.state.inputArtist,
        "url": `http://spoti4.future4.com.br/${this.state.inputUrl}.mp3`
    
    }
    console.log(this.state.playlistSelecionada)
    console.log(body)
    console.log(this.header)
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks`, this.header, body)
    .then(() => {
      alert('A MUSICA FOI ADD!!!')
    })
    .catch((err) => {
      console.log(err)
      alert('deu erro para add a musica!')
    })
  }


  render(){
    
    const mapArrayDePlaylist = this.state.arrayDePlaylists.map((playlist) => {
      return(
        <div className='containerPlaylist'>
          <p onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</p>
          <button className='buttonDelete' onClick={() => this.deletaPlaylist(playlist.id)}>X</button>
        </div>
        
      )
    })    


    return ( 
      <div className='container'>
        <div className='containerNav'>
          <div className='logo'><h1>Monky</h1></div>
          
          <nav className='nav'>
              <input className='input' placeholder='Buscar...' input/>
              <input className='input' placeholder='Add sua nova PlayList' value={this.state.inputNovaPlaylist} onChange={this.handleNovaPlaylist}/>
              <button  onClick={this.createPlaylist} >Criar!</button>
              <hr/>

              <input className='input' placeholder='Nome da música...' value={this.state.inputName} onChange={this.handleName} input/>
              <input className='input' placeholder='Artista' value={this.state.inputArtist} onChange={this.handleArtist} input/>
              <input className='input' placeholder='URL' value={this.state.inputUrl} onChange={this.handleUrl} input/>
              <button onClick={this.addTrackToPlaylist}>Add música</button>
          </nav>          
          <nav className='sair'>
              <p className='p'>Sair</p>
          </nav>
        </div>
        <div className='menu'>
          <div className='navMenu'>
            <a class="block" >Minhas Músicas</a>
            <a class="block" onClick={this.getPlaylists} >Minhas Playlist</a>
          </div>

          <div className='containerColorido'>
            {mapArrayDePlaylist}


          </div>
        </div>
      </div>




    ) 
  } 
} 

export default Labefy;