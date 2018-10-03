import React, { Component } from "react";
import Routes from "../../routes/index";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
