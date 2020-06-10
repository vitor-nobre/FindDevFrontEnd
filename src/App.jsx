import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form> 
      </aside>
      <main>
        <ul>
          <li className="dev-item" >
            <header>
              <img src="" alt="" />
              <div className="user-info">
                <strong></strong>
                <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item" >
            <header>
              <img src="" alt="" />
              <div className="user-info">
                <strong></strong>
                <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item" >
            <header>
              <img src="" alt="" />
              <div className="user-info">
                <strong></strong>
                <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item" >
            <header>
              <img src="" alt="" />
              <div className="user-info">
                <strong></strong>
                <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="">Acessar Perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
