import './App.css';
import {About} from './pages/About';
import {Home} from './pages/Home';
import {Error} from './pages/Error';
import {BrowserRouter, Switch, Route} from 'react-router-dom' ;


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/about"}>
          <About/>
        </Route>

        <Route exact path={"/"}>
          <Home/>
        </Route>

        <Route>
          <Error/>
        </Route>


      </Switch>
    </BrowserRouter>

  );
}

export default App;
