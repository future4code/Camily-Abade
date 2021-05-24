import axios from 'axios';
import React from 'react'; 
import './labefy.css'; 

class Labefy extends React.Component { 
  
  state = {
    inputNovaPlaylist: '',
    arrayDePlaylists: [],
    arrayDeMusica: [],
    ArraydeArtista: [],
    urlMusica: '',
    inputName: '',
    inputArtist: '',
    inputUrl: '',

    playlistSelecionada: '' 
  }

  handleNovaPlaylist = (e) => {
    this.setState({inputNovaPlaylist: e.target.value})
    console.log('oie, vc escreveu algo no input')
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
      alert('Sua nova playlist foi criada com sucesso!! Aguarde um instante ou veja ela em "Minhas Playlists"')
      this.setState({inputNovaPlaylist:""})
      this.getPlaylists()
    })
    .catch((err) => {
      alert('Tente Novamente, você não pode criar playlist com mesmos nomes :(')
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
      alert(`A sua playlist foi deletada com sucesso`)
      this.getPlaylists()
      console.log(res)
    })
    .catch((err) => {
      alert(`Não foi possível deletar a playlist, tente novamente :)`)
    })
  }

  getPlaylistTracks = (id) => {
    this.setState({playlistSelecionada: id})
    console.log(this.header)
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, this.header)
    .then((res) => {
    this.setState({arrayDeMusica:res.data.result.tracks})
    alert('Você clicou na sua playlist escolhida! 😉')

    })
    .catch(() => {
      console.log('ERROR ao pegar detalhes da playlist')
    })
  }

  addTrackToPlaylist = () => {
    const body = {
        "name": this.state.inputName, 
        "artist": this.state.inputArtist,
        "url": this.state.inputUrl
    }
   
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks`, body, this.header)
    .then(() => {
      alert('Sua música foi adicionada com sucesso!! Para ver ela clique na playlist adicionada')
      this.setState({inputUrl: '', inputName: '', inputArtist: ''})

    })
    .catch((err) => {
      console.log(err)
      alert('deu erro para adicionar sua a musica!, tente novamente :)')
    })
  }

  tocaMusica = (e) => {
    this.setState({urlMusica: e})
  }

  removeTrackFromPlaylist = (id, url) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks/${id}`, this.header)
    .then(() => {
      alert('A sua música foi deletada com sucesso!')
      this.getPlaylistTracks(this.state.playlistSelecionada)
      if (url === this.state.urlMusica){
        this.setState({urlMusica: ''})
      }
    })
    .catch(() => {
      console.log('não foi possível deletar sua música')

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

    const mapArraydeMusica = this.state.arrayDeMusica.map((musicas) => {
      return (
        <div className='containerListaDeMusica'>
          <p className='nameMusica'>{musicas.name}</p>
          <p className='nameMusica'>{musicas.artist}</p>
          <button onClick={() => this.removeTrackFromPlaylist(musicas.id, musicas.url)}>x</button>
          <button onClick={() => this.tocaMusica(musicas.url)}>Play</button>
        </div>
      )
    })



    return ( 
      <div className='container'>
        
        <div className='containerNav'>
          <div className='logo'><h1>Monky</h1></div>
          <nav className='nav'>
              <p className='criarPlaylist'>Criar Playlist</p>
              <input className='inputLabefy' placeholder='Nome da sua nova Playlist' value={this.state.inputNovaPlaylist} onChange={this.handleNovaPlaylist}/>
              <button  className='boaoNav' onClick={this.createPlaylist} >Criar!</button>
              <p className='AddMusica'>Add música</p>
              <input className='input' placeholder='Nome da música...' value={this.state.inputName} onChange={this.handleName} input/>
              <input className='input' placeholder='Artista' value={this.state.inputArtist} onChange={this.handleArtist} input/>
              <input className='input' placeholder='URL' value={this.state.inputUrl} onChange={this.handleUrl} input/>
              <button className='boaoNav' onClick={this.addTrackToPlaylist}>Add música</button>
              <p className='observacao'>Antes de clicar no botão "Add música" clique na playlista que você deseja adicionar a música :)</p>

          </nav>          
        </div>
        <div className='menu'>
          <div className='navMenu'>
            <h1 class="minhasPlaylist" onClick={this.getPlaylists} >Minhas Playlists</h1>
          </div>

          <div className='containerColorido'>
            <div className='contianerPlaylist'>
              {mapArrayDePlaylist}
            </div>
            

            <div className='contianerPlaylist'>
              <div className='containerMusica'>
                <p>Música</p>
                <p>Artista</p>
                <p>Delete/Play</p>
              </div>
              <div>
              {mapArraydeMusica}
              </div>
            </div>
            
            <audio src={this.state.urlMusica} controls autoPlay ></audio> 


          </div>
        </div>
      </div>




    ) 
  } 
} 

export default Labefy;