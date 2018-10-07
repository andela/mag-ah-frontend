import React, { Component } from "react";
import Routes from "../../routes/index";
import AHHeader from "../Header/index";
import "./App.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AHHeader />
        <Routes />
      </div>
    );
  }
}

export default App;
