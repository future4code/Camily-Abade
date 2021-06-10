import './App.css';
import {About} from './pages/About';
import {Home} from './pages/Home';
import {Error} from './pages/Error';
import {DetalhesDaViagem} from './pages/DetalhesPage'
import {InscricaoDaViagem} from './pages/InscricaoPage'
import {Login} from './pages/LoginPage'
import {AdmViagens} from './pages/AdmViagemPage'


import {BrowserRouter, Switch, Route} from 'react-router-dom' ;
import axios from 'axios';

function App() {

  const GetTrip = () =>{
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/camily/trips'
  
    axios.get(URL)
    .then ( (res) => {
      console.log(res.data.trips)
    })
    .catch((err) => {
      console.log(err)
    })
  }




  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/about"}>
          <About GetTrip={GetTrip}/>
        </Route>

        <Route exact path={"/detalhes-viagem"}>
          <DetalhesDaViagem/>
        </Route>

        <Route exact path={"/detalhes-inscricao"}>
          <InscricaoDaViagem/>
        </Route>

        <Route exact path={"/login"}>
          <Login/>
        </Route>

        <Route exact path={"/adm-viagens"}>
          <AdmViagens/>
        </Route>

        <Route>
          <Error/>
        </Route>


      </Switch>
    </BrowserRouter>

  );
}

export default App;
