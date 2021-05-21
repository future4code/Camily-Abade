import "./App.css";
import React from "react";
import gorilaLogIn from "./imagens/gorilaLogIn.jpg";

export default class App extends React.Component {
  render() {
    return (
      <div className="containerBody">
        <main>
          <div className="containerImgLog">
            <div className="img">
              <img src="gorilaLogIng.jpg" />
            </div>

            <div className="containerLog">
              <div className="logIn">
                <h2>Vai uma musiquinha aí??</h2>
              </div>
              <div className="Containerinput">
                <input placeholder='Nome'/>
                <input placeholder='Senha'/>
              </div>
              <div className="logIn">
                <p>Faça o seu LogIn</p>
                <button>LogIn</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
