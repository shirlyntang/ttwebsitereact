import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import Pillars from "./components/pillars";
import AboutUs from "./components/about_us";
import RushHome from "./components/rushhome";
import Footer from "./components/footer";

import Actives from "./actives";
import Alumni from "./alumni";
import Brotherhood from "./brotherhood";
import Hist from "./history";
import Professional from "./professional";
import Rush from "./rush";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/actives" component={Actives} />
              <Route path="/alumni" component={Alumni} />
              <Route path="/brotherhood" component={Brotherhood} />
              <Route path="/history" component={Hist} />
              <Route path="/professional" component={Professional} />
              <Route path="/rush" component={Rush} />
              <Route path="/" component={Home} />
              <Route render={() => <h3>404 not found</h3>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
