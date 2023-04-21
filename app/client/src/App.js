import logo from './logo.svg';
import './App.css';
import Map from "./components/map/Map.js";
import Navbar from "./components/navbar/Navbar.jsx";
import { useState } from "react";

//
function App() {
    const [popUpVisible, setPopUpVisible] = useState(false);

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
        </a>we
      </header>
      <body>
        <h1>
          title
        </h1>
      </body>
    </div>
  );
}

export default App;
