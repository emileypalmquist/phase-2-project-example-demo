import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_JSON_SERVER

function App() {

  useEffect(() => {
    fetch(BASE_URL + "/example")
  }, [])

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
      </header>
    </div>
  );
}

export default App;
