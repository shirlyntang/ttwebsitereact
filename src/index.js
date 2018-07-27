import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import Pillars from "./components/pillars";

class App extends Component {
  render() {
    const Service = {
      picture: "heart.svg",
      name: "Service",
      description:
        "The surrounding communities are very important to us. We believe that giving back to the community not only benefits the communities, but our brotherhood as well. Working alongside with our brothers creates a strong bond and allows us to grow and get involved."
    };
    const Profession = {
      picture: "graduation-cap.svg",
      name: "Professional Development",
      description:
        "At Theta Tau, we assist all of our members develop the professional skills needed in life after graduation. From resume workshops to company info sessions, our chapter strives to provide the tools needed for any career path. With the variety of skills and mentorship available from our network of engineers, one has the support needed to achieve the high level of professionalism we see in our members."
    };
    const Brotherhood = {
      picture: "users.svg",
      name: "Brotherhood",
      description:
        "Promoting friendship and collaboration between fraternity members, brotherhood is one of the three key pillars of Theta Tau. Brothers of Theta Tau forge tightly-knit relationships through various brotherhood events, including socials, retreats, and friendly competition."
    };
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <Pillars pillar={Service} />
          <Pillars pillar={Profession} />
          <Pillars pillar={Brotherhood} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
