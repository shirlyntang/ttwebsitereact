import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import Pillars from "./components/pillars";
import AboutUs from "./components/about_us";
import RushHome from "./components/rushhome";
import Footer from "./components/footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <Pillars
            picture={"heart.svg"}
            name={"Service"}
            description={
              "The surrounding communities are very important to us. We believe that giving back to the community not only benefits the communities, but our brotherhood as well. Working alongside with our brothers creates a strong bond and allows us to grow and get involved."
            }
          />
          <Pillars
            picture={"graduation-cap.svg"}
            name={"Professional Development"}
            description={
              "At Theta Tau, we assist all of our members develop the professional skills needed in life after graduation. From resume workshops to company info sessions, our chapter strives to provide the tools needed for any career path. With the variety of skills and mentorship available from our network of engineers, one has the support needed to achieve the high level of professionalism we see in our members."
            }
          />
          <Pillars
            picture={"users.svg"}
            name={"Brotherhood"}
            description={
              "Promoting friendship and collaboration between fraternity members, brotherhood is one of the three key pillars of Theta Tau. Brothers of Theta Tau forge tightly-knit relationships through various brotherhood events, including socials, retreats, and friendly competition."
            }
          />
        </div>
        <div>
          <RushHome />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
