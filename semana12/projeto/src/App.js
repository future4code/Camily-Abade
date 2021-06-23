import React from 'react';
import Router from './routes/Router';
import { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';


const App = () => {
  const token = localStorage.getItem('token')
  const [buttonLoginLogOut, setButtonLoginLogOut] = useState(token ? 'LogOut' : 'LogIn'  ) 

  return(
    <BrowserRouter>
      <Header buttonLoginLogOut={buttonLoginLogOut} setButtonLoginLogOut={setButtonLoginLogOut}/>
      <Router buttonLoginLogOut={buttonLoginLogOut} setButtonLoginLogOut={setButtonLoginLogOut}/>
    </BrowserRouter>
  );
}

export default App;