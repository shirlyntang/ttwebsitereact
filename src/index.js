import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/navbar";
import Carousel from "./components/carousel";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
