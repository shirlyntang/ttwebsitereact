import React from "react";
import Gallery from 'react-photo-gallery';



import serv1 from "../images/Service/image1.jpg";
import serv2 from "../images/Service/image2.jpg";



const Service_collage = () => {
  const IMAGES =
[{
        src: serv1,
        width:16,
        height:9
},
{
        src: serv2,
        width:16,
        height:9
}]
var x=3;
  return (
    <div>
      
      <Gallery columns={x} photos={IMAGES}/>
    
      </div>
  );
};
export default Service_collage;
