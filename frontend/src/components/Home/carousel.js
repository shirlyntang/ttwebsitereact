import React from "react";
import { Carousel } from "react-bootstrap";
import "../../css/carousel.css";

import home1 from "../../images/Home/home_1.jpg";
import home2 from "../../images/Home/home_2.jpg";
import home3 from "../../images/Home/home_3.jpg";
import home4 from "../../images/Home/home_4.jpg";
import home5 from "../../images/Home/home_5.jpg";

export default class CarouselHome extends React.Component {
  render() {
    return (
      <div>
        <section id="slideshow">
          <Carousel>
            <Carousel.Item>
              <img src={home1} alt="tt1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={home2} alt="tt2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={home3} alt="tt3" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={home4} alt="tt4" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={home5} alt="tt5" />
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    );
  }
}
