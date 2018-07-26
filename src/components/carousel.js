import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../css/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import home1 from "../images/Home/home_1.jpg";
import home2 from "../images/Home/home_2.jpg";
import home3 from "../images/Home/home_3.jpg";
import home4 from "../images/Home/home_4.jpg";
import home5 from "../images/Home/home_5.jpg";

export default class CarouselHome extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop
          autoPlay
        >
          <div>
            <img src={home1} alt="tt1" />
          </div>
          <div>
            <img src={home2} alt="tt2" />
            <p className="theta-tau">Theta Tau</p>
          </div>
          <div>
            <img src={home3} alt="tt3" />
            <p className="theta-tau">Theta Tau</p>
          </div>
          <div>
            <img src={home4} alt="tt4" />
            <p className="theta-tau">Theta Tau</p>
          </div>
          <div>
            <img src={home5} alt="tt5" />
            <p className="theta-tau">Theta Tau</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
