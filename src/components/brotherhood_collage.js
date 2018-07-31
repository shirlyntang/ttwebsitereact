import React from "react";
import Gallery from 'react-grid-gallery';



import bro1 from "../images/Brotherhood/image1.jpg";
import bro2 from "../images/Brotherhood/image2.jpg";
import bro3 from "../images/Brotherhood/image3.jpg";
import bro4 from "../images/Brotherhood/image4.jpg";
import bro5 from "../images/Brotherhood/image5.jpg";
import bro6 from "../images/Brotherhood/image6.jpg";

const Brotherhood_collage = () => {
  const IMAGES =
[{
        src: {bro1},
        thumbnail: {bro1},
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Hi"
},
{
        src: {bro2},
        thumbnail: {bro2},
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "there"
},
 
{
        src: {bro3},
        thumbnail: {bro3},
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption:"bud"
},
{
    src: {bro4},
    thumbnail: {bro4},
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "there"
},
{
    src: {bro5},
    thumbnail: {bro5},
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "there"
},
{
    src: {bro6},
    thumbnail: {bro6},
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "there"
}]
  return (
    <div>
      
      <Gallery images={IMAGES}/>
    
      </div>
  );
};
export default Brotherhood_collage;
