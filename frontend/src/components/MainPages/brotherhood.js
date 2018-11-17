import React from "react";

import BrotherhoodCollage from "../brotherhood_collage";
import "../../css/brotherhood.css";

const Brotherhood = () => {
  return (
    <div>
      <section id="broHeader">
        <div className="bro-text">
          <div id="bro-cover-text">Brotherhood</div>
        </div>
      </section>
      <div>
        <p id="p-bro-text">
          As members of Theta Tau, we strive to maintain a strong brotherhood
          through social activities and events, personal talks, or just simply
          hanging out and studying together.
        </p>
      </div>
      <div className="bro-h">
        <span id="bro-h2">Our Brothers</span>
      </div>
      <div className="bro-collage">
        <BrotherhoodCollage />
      </div>
    </div>
  );
};
export default Brotherhood;
