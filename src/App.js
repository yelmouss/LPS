import logo from "./logo.svg";
import "./App.css";

import { Button } from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button as="a" variant="success">
          Button as link <FaBeer />
        </Button>
      </header>
    </div>
  );
}

export default App;
