import React from "react";
import Gallery from 'react-photo-gallery';



import bro1 from "../images/Brotherhood/image1.jpg";
import bro2 from "../images/Brotherhood/image2.jpg";
import bro3 from "../images/Brotherhood/image3.jpg";
import bro4 from "../images/Brotherhood/image4.jpg";
import bro5 from "../images/Brotherhood/image5.jpg";
import bro6 from "../images/Brotherhood/image6.jpg";

const Brotherhood_collage = () => {
  const IMAGES =
[{
        src: bro1,
        width:16,
        height:9
},
{
        src: bro2,
        width:16,
        height:9
},
 
{
        src: bro3,
        width:16,
        height:9
},
{
    src: bro4,
    width:4,
        height:3
},
{
    src: bro5,
    width:16,
    height:9
},
{
    src: bro6,
    width:16,
    height:9
}]
let x=2;
  return (
    <div>
      
      <Gallery columns={x} photos={IMAGES}/>
    
      </div>
  );
};
export default Brotherhood_collage;
