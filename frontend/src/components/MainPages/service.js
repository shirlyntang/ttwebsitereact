import React from "react";

import Service_collage from "../service_collage";

import "../../css/service.css"

const Service = () => {
  return (
    <div>
      <section id="servHeader">
        <div className="serv-text">
          <div id="serv-cover-text">Service</div>
        </div>
      </section>
      <div>
        <p id="p-pro-text">
          As members of Theta Tau, we strive to give back to the community by 
          hosting science fairs at local elementary schools, putting on workshops 
          for UCSB students, or even something as simple as a beach clean up.
        </p>
      </div>
      <div className="service_collage">
      <Service_collage/>
      </div>
    </div>
  );
};
export default Service;
