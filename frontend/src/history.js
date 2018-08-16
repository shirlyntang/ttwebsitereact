import React from "react";

import "./css/history.css"

import hist1 from "./images/History/image1.png"
import hist2 from "./images/History/image2.jpg"
const Hist = () => {
  return (
    <div>
      <section id="histHeader">
      <div className="hist-text">
        <div id="hist-cover-text">
                  Our History
        </div>
        </div>
      </section>
      <section id="hist-info">
        <div className="tt-origins">
          <h2> Theta Tau Origins</h2>
           <img src={hist1} />
					  <p>Theta Tau was founded at the University of Minnesota in 1904 by Erich J. Schrader, Elwin L. Vinal, William M. Lewis,
						and Isaac B. Hanks. Since then, over 40,000 have been been initiated. With emphasis on quality and a strong fraternal
						bond, the Fraternity has chapters only at ABET accredited schools.</p>
        </div>
        <div className="ucsb-origins">
           <h2> UCSB Origins</h2>
            <img src={hist2} className="hist2"/>
					  <p>The idea of bringing Theta Tau to UCSB started in Winter of 2016, when Brian Yan, Current Vice Regent, reached out to
						the national Fraternity to get help with creating a colony at UCSB. After a year of hard work on the petition and gathering
						interest on campus, the founding class of 25 was initiated on February 5th, 2017. Theta Tau is the first and only co-ed
						engineering Fraternity at UCSB.</p>
        </div>
      </section>
    </div>
  );
};
export default Hist;
