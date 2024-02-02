import logo from './logo.svg';
import './App.css';
import Navegation from './components/navegation/navegation';
import React from 'react';
function App() {
  const saludar = () => {
    alert('saludos')
  }


  return (
    <React.Fragment>

      <Navegation />
      <div className="App">
        <header className="App-header">
          <button onClick={saludar}>
            Saludar al cliente
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>

  );
}

export default App;
