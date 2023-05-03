import React, { useState } from "react";
import MapPi from "./map-picture.jpg";
import pic from "./pic";
import Pic from "./pic";
import Popup from "./popUp";


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
    


  };
  
  return (
    <>
      <Pic></Pic>
      <Popup></Popup>

    </>
     
  );
  };
  
export default Map;