import './App.css';
import Router from './routes/Router'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const GetTrip = () =>{
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/camily/trips'
    axios.get(URL)
    .then ( (res) => {
    })
    .catch((err) => {
    })
  }
  return (
    <Router/>
  );
}

export default App;
