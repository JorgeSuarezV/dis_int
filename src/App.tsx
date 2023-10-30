import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from "./components/Icon";
import SearchSVG from "./assets/icons/SearchSVG";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Icon image={<SearchSVG/>} />
      </header>
    </div>
  );
}

export default App;
