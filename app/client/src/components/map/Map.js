import React, { useState } from "react";
import MapPi from "./map-picture.jpg";

//Ich han do schomol probiert s picture responsive zmache, theoretisch funktionierts

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
    
    <div>
      <map name="myMap" id="myMap">
        <area id="node-a" shape="rect" coords="731,159,757,188" />
        <area id="node-b" shape="rect" coords="685,139,713,168" />
        <area id="node-c" shape="rect" coords="597,142,625,171" />
      </map>
      <img
        id="myImage"
        src={MapPi}
        usemap="#myMap"
        alt="Picture of the Camping Map"
        style={{ width: "100%", height: "100%" }}
        onClick={handleImageClick}
      />
    </div>
    
  );
  };
  
export default Map;