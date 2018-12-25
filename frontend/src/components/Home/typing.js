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
            startDelay={500}
          >
            <span className="thetaTau">UCSB Theta Tau</span>
            <br />
            <span className="pillars-typing">
              Service
              <span className="accents">
                .<Typist.Delay ms={500} />
              </span>{" "}
              Professionalism
              <span className="accents">
                .<br />
                <Typist.Delay ms={500} />
              </span>{" "}
              Brotherhood
              <span className="accents">.</span>
            </span>
          </Typist>
        </section>
      </div>
    );
  }
}

export default Typing;
