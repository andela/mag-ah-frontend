import React, { Component } from "react";
import Routes from "../../routes/index";
import AHHeader from "../Header";
import "./App.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <AHHeader />
        <Routes />
      </div>
    );
  }
}

export default App;
