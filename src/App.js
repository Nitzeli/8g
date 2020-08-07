import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components

import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";
import { Container, CardColumns } from "reactstrap";
import Clock from "./components/Date";
import SwitchExample from "./components/SwitchExample";
import List from "./components/List";

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
        <FunctionGreet firstName="Nitz" lastName="Villa" />
        <ClassGreet firstName="Otra vez Nitz" lastName=":3 " />
        <SwitchExample />
        <Clock />
        <List />
      </header>
      <Post />
    </div>
  );
}

export default App;
