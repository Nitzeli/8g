import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components

import Greet from './components/Greet'

function App() {
  return (
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
        <Greet firstName = 'Nitz' lastName= 'Villa'/>
        <Greet firstName = 'Mels' lastName= 'Castillo'/>
      </header>
    </div>
  );
}

export default App;
