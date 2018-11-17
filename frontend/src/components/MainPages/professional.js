import React from "react";

import ProCollage from "../pro_collage";
import "../../css/professional.css";
const Professional = () => {
  return (
    <div>
      <section id="proHeader">
        <div className="pro-text">
          <div id="pro-cover-text">Professional</div>
        </div>
      </section>
      <div>
        <p id="p-pro-text">
          As members of Theta Tau, we strive to help each other not only in the
          classrooms but also professionally. We help each other achieve our
          dream jobs or dream graduate schools through resume & interview
          workshops, guest speakers, or just networking with each other.
        </p>
      </div>
      <div className="pro-h">
        <span id="pro-h2">Where We've Been</span>
      </div>
      <div className="pro-collage">
        <ProCollage />
      </div>
    </div>
  );
};
export default Professional;
