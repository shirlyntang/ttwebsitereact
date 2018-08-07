import React from "react";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Brotherhood_collage from "./components/brotherhood_collage";

const Brotherhood = () => {
  
  return (
    <div>
      <NavBar/>
      <div>Brotherhood</div>
      <div>Brotherhood</div>
      <div>Brotherhood</div>
      <div>As members of Theta Tau, we strive to maintain a strong brotherhood through social activities and events, personal talks,
						or just simply hanging out and studying together.</div>
      <div>
      <Brotherhood_collage/>
    
      </div>
      <Footer/>
    </div>
  );
};
export default Brotherhood;
