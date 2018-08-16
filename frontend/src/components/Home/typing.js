import React, { Component } from "react";
import Typist from "react-typist";
import "../../css/typing.css";

class Typing extends Component {
  render() {
    return (
      <div>
        <section id="typing">
          <Typist
            className="home"
            avgTypingSpeed={1000}
            cursor={{ show: false }}
            startDelay={1500}
          >
            <span className="thetaTau">UCSB Theta Tau</span>
            <br />
            <span className="pillars">
              Service
              <span className="red-accents">
                .<Typist.Delay ms={500} />
              </span>{" "}
              Professionalism
              <span className="red-accents">
                .<br />
                <Typist.Delay ms={500} />
              </span>{" "}
              Brotherhood
              <span className="red-accents">.</span>
            </span>
          </Typist>
        </section>
      </div>
    );
  }
}

export default Typing;
