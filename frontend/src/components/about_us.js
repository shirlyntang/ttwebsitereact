import React from "react";
import "../css/about_us.css";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <section id="about-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div id="wwa">
                  <h1 id="who-we-are">Who we are</h1>
                  <p id="who-we-are-description">
                    The Largest and Oldest Co-Ed Enginnering Fraternity
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 purpose">
                <span className="red-accents">" </span>
                The purpose of Theta Tau is to develop and maintain a high
                standard of professional interest among its members, and to
                unite them in a strong bond of fraternal fellowship.
                <span className="red-accents"> "</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
