import React from "react";
import "./css/rush.css";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import RushCarousel from "./components/carousel_rush";
import RushFAQPanel from "./components/rush_faq_panel";

const Rush = () => {
  return (
    <div>
      <NavBar />
      <RushCarousel />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1 id="h-rush-text">
              Fall Rush 2018 will start the first week (10/1 - 10/5)
            </h1>
            <p id="p-rush-text">Come to the Arbor and check us out!</p>
            <br />
            <h2 id="rush-faq">FAQS</h2>
          </div>
        </div>
      </div>
      <RushFAQPanel />
      <Footer />
    </div>
  );
};
export default Rush;
