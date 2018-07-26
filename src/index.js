import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/navbar";
import Carousel from "./components/carousel";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
