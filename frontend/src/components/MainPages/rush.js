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
              Due to COVID-19, we'll be postponing our official Rush to Winter 2021. <br/><br/>
              However, we'll still have our virtual "Meet the Brother" events throughout the Fall so we can meet you guys!
            </h1>
            <p id="p-rush-text">Please <a href="https://forms.gle/1cQzjF8ozmyYCu9q8">RSVP</a> so we can send you links to the Zoom and Discord for the events.</p>
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
