import React from "react";
import Gallery from 'react-photo-gallery';



import bro1 from "../images/Brotherhood/image1.jpg";
import bro2 from "../images/Brotherhood/image2.jpg";
import bro3 from "../images/Brotherhood/image3.jpg";
import bro4 from "../images/Brotherhood/image4.jpg";
import bro5 from "../images/Brotherhood/image5.jpg";
import bro6 from "../images/Brotherhood/image6.jpg";
import bro7 from "../images/Brotherhood/image7.jpg";
import bro8 from "../images/Brotherhood/image8.jpg";
import bro9 from "../images/Brotherhood/image9.jpg";
import bro10 from "../images/Brotherhood/image10.jpg";
import bro11 from "../images/Brotherhood/image11.jpg";
import bro12 from "../images/Brotherhood/image12.jpg";
import bro13 from "../images/Brotherhood/image13.jpg";
import bro14 from "../images/Brotherhood/image14.jpg";
import bro15 from "../images/Brotherhood/image15.jpg";
import bro16 from "../images/Brotherhood/image16.jpg";
import bro17 from "../images/Brotherhood/image17.jpg";


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
    width:16,
        height:9
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
},
{
    src: bro7,
    width:16,
    height:9
},
{
    src: bro8,
    width:16,
    height:9
},
{
    src: bro9,
    width:16,
    height:9
},
{
    src: bro10,
    width:16,
    height:9
},
{
    src: bro11,
    width:16,
    height:9
},
{
    src: bro12,
    width:16,
    height:9
},
{
    src: bro13,
    width:16,
    height:9
},
{
    src: bro14,
    width:16,
    height:9
},
{
    src: bro15,
    width:16,
    height:9
},
{
    src: bro16,
    width:16,
    height:9
},
{
    src: bro17,
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
export default Brotherhood_collage;
