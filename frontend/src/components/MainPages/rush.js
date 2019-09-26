import React from "react";
import "../../css/rush.css";

import RushCarousel from "../Rush/carousel_rush";
import RushFAQPanel from "../Rush/rush_faq_panel";

const Rush = () => {
  return (
    <div>
      <RushCarousel />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1 id="h-rush-text">
              Fall Rush 2019 will start week 1 of the quarter (9/30 - 10/4)
            </h1>
            <p id="p-rush-text">Come to the Arbor and check us out!</p>
            <br />
            <h2 id="rush-faq">FAQS</h2>
          </div>
        </div>
      </div>
      <RushFAQPanel />
    </div>
  );
};
export default Rush;
