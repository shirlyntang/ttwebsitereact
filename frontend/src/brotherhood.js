import React from "react";

import Brotherhood_collage from "./components/brotherhood_collage";
import "./css/brotherhood.css"

const Brotherhood = () => {
  return (
    <div>
      <section id="broHeader">
      <div className="bro-text">
        <a id="bro-cover-text">
                  Brotherhood
        </a>
        </div>
      </section>
      <div>
       
        <p id="p-bro-text">
        As members of Theta Tau, we strive to maintain a strong brotherhood
        through social activities and events, personal talks, or just simply
        hanging out and studying together.
        </p>
        
      </div>
      <div>
        <Brotherhood_collage />
      </div>
      
    </div>
  );
};
export default Brotherhood;
