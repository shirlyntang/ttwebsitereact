import React from "react";
import { Carousel } from "react-bootstrap";
import "../../css/carousel_rush.css";

import rush1 from "../../images/Rush/rush_1.png";
import rush2 from "../../images/Rush/rush_2.jpg";
import rush3 from "../../images/Rush/rush_3.jpg";
import rush4 from "../../images/Rush/rush_4.jpg";
import rush5 from "../../images/Rush/rush_5.JPG";
import rush6 from "../../images/Rush/rush_6.jpg";

export default class RushCarousel extends React.Component {
  render() {
    return (
      <div>
        <section id="slideshow-rush">
          <Carousel>
            <Carousel.Item>
              <img src={rush1} alt="rush1" />
              <Carousel.Caption>
                <h1 id="rush-text">Rush</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={rush2} alt="rush2" />
              <Carousel.Caption>
                <h1 id="rush-text">Rush</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={rush3} alt="rush3" />
              <Carousel.Caption>
                <h1 id="rush-text">Rush</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={rush4} alt="rush4" />
              <Carousel.Caption>
                <h1 id="rush-text">Rush</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={rush5} alt="rush4" />
              <Carousel.Caption>
                <h1 id="rush-text">Rush</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={rush6} alt="rush4" />
              <Carousel.Caption>
                <h1 id="rush-text">Rush</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    );
  }
}
