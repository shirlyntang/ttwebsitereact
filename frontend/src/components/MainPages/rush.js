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
              After a long hiatus, we are resuming our recruitment this WINTER! <br/><br/>
              These events will occur week 1 (January 4th - January 8th) of 2021.
            </h1>
            <p id="p-rush-text">For the Zoom link, check out our <a href="https://www.facebook.com/events/367817124516795/">FB Event Page</a>!</p>
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
