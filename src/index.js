import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route} from 'react-router-dom';


import NavBar from "./components/navbar";



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
      <BrowserRouter>
      <div>
      <Route path="/actives" component={Actives}/>
        <Route path="/alumni" component={Alumni}/>
        <Route path="/brotherhood" component={Brotherhood}/>
        <Route path="/history" component={Hist}/>
        <Route path="/professional" component={Professional}/>
        <Route path="/rush" component={Rush}/>
        <Route path="/" exact component={Home}/>
      <NavBar />

      </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
