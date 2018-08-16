import React from "react";
import Gallery from 'react-photo-gallery';

import pro1 from "../images/Professional/image1.png"

import pro3 from "../images/Professional/image3.jpg"
import pro4 from "../images/Professional/image4.png"
import pro5 from "../images/Professional/image5.png"
import pro6 from "../images/Professional/image6.png"
import pro7 from "../images/Professional/image7.png"
import pro8 from "../images/Professional/image8.jpg"
import pro9 from "../images/Professional/image9.png"
import pro10 from "../images/Professional/image10.png"
import pro11 from "../images/Professional/image11.png"
import pro12 from "../images/Professional/image12.jpg"
import pro13 from "../images/Professional/image13.jpg"

import pro15 from "../images/Professional/image15.svg"
import pro16 from "../images/Professional/image16.svg"
import pro17 from "../images/Professional/image17.jpg"
import pro18 from "../images/Professional/image18.png"
import pro19 from "../images/Professional/image19.jpeg"
import pro20 from "../images/Professional/image20.JPG"
import pro21 from "../images/Professional/image21.png"


const Pro_collage =()=>{

    const IMAGES =
[{
        src: pro1,
        width:10,
        height:9
},

{
        src: pro3,
        width:16,
        height:4,
},
{
    src: pro4,
    width:16,
        height:9
},
{
    src: pro5,
    width:16,
    height:7
},
{
    src: pro6,
    width:16,
    height:5
},
{
    src: pro7,
    width:16,
    height:9
},
{
    src: pro8,
    width:16,
    height:9
},
{
    src: pro9,
    width:16,
    height:9
},
{
    src: pro10,
    width:16,
    height:9
},
{
    src: pro11,
    width:16,
    height:9
},
{
    src: pro12,
    width:16,
    height:9
},
{
    src: pro13,
    width:16,
    height:9
},

{
    src: pro15,
    width:16,
    height:9
},
{
    src: pro16,
    width:16,
    height:9
},
{
    src: pro17,
    width:16,
    height:9
},

{
    src: pro18,
    width:16,
    height:9
},
{
    src: pro19,
    width:16,
    height:9
},
{
    src: pro20,
    width:16,
    height:9
},
{
    src: pro21,
    width:16,
    height:9
}]
let x=3;
  return (
    <div>
      
      <Gallery columns={x} photos={IMAGES}/>
    
      </div>
  );
};

export default Pro_collage;
