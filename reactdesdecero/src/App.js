import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navegation from './componentes/navegacion/navegacion';
import Footer from './componentes/footer/footer';



function App() {
  
  const alerta = () => {
    alert('Saludos')
  }
  return (
    
    <React.Fragment>

    <Navegation />

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={alerta}>
          Saludar al cliente
        </button>
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
    
    <div className="App">
      <header className="App-header">
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
    
    <Footer/>
    </React.Fragment>
  );
}

export default App;
