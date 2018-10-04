import React, { Component } from "react";
import Routes from "../../routes/index";
import AHHeader from "../Header";
import Home from "../Home/index";
import "./App.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <AHHeader />
        <Routes />
        <Home />
      </div>
    );
  }
}

export default App;
