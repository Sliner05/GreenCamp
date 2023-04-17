import React, { useState } from "react";
import MapPi from "./map-picture.jpg";
import pic from "./pic";
import Pic from "./pic";
//import poly from "././polygon/polygon.js"
// import Polygon from "../polygon/polygon.js";

//Ich han do schomol probiert s picture responsive zmache, theoretisch funktionierts


// const mapping = [];
//mapping.push(new Polygon([444,101],[428,145],[452,157],[472,112]));

//Debug
// let vertices = [[0, 0], [0, 1], [1, 1], [1, 0]];
// let poly = new Polygon(vertices);

// let point = [0.5, 0.5];
// console.log(poly.contains(point)); // true

// point = [2, 2];
// console.log(poly.contains(point)); // false
//Debug**


//console.log("First Poly: "+ mapping[0]);



const Map = () => {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [popUpContent, setPopUpContent] = useState("");
  
  const handleImageClick = (e) => {
    
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log("Clicked " + x + " :x " + y + " :y");
    //console.log(e.nativeEvent.offsetX + " = Native event");
    
    if (x > 230 && x < 210 && y > 60 || y < 80) {
      console.log("Zelt 1");
    }
    try{
      let point = [441,101];
      //console.log(mapping[0].contains(point))
    }catch{console.log("mapping didnt work");}
    

    // if (x > 100 && x < 200 && y > 100 && y < 200) {
    //   // setPopUpContent("Popup 1 content");
    //   // setPopUpVisible(true);s
    //   console.log("Point 1");
    // } else if (x > 300 && x < 400 && y > 300 && y < 400) {
    //   // setPopUpContent("Popup 2 content");
    //   // setPopUpVisible(true);
    //   console.log("Point 2");
    // }

  };
  
  return (
    
    // <div>
    //   <map name="myMap" id="myMap">
    //     <area id="node-a" shape="rect" coords="731,159,757,188" />
    //     <area id="node-b" shape="rect" coords="685,139,713,168" />
    //     <area id="node-c" shape="rect" coords="597,142,625,171" />
    //   </map>
    //   <img
    //     id="myImage"
    //     src={MapPi}
    //     usemap="#myMap"
    //     alt="Picture of the Camping Map"
    //     style={{ width: "80%", height: "80%" }}
    //     onClick={handleImageClick}
    //   />
      <Pic></Pic>
    // </div>
    
  );
  };
  
export default Map;