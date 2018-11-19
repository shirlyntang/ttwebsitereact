import React, { Component } from "react";

import Typing from "../Home/typing";
//import Carousel from "../Home/carousel";
import Pillars from "../Home/pillars";
import AboutUs from "../Home/about_us";
import RushHome from "../Home/rushhome";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Typing />

        <div>{/*<Carousel />*/}</div>
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
      </div>
    );
  }
}
