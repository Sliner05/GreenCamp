import React, { useState } from "react";
import MapPi from "./map-picture.jpg";
import pic from "./pic";
import Pic from "./pic";
import Popup from "./popUp";
//import "./map.css";
import DebugPic from "./debugPic";


const Map = () => {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [popUpContent, setPopUpContent] = useState("");
  
  const handleImageClick = (e) => {
    
    

  };
  
  return (
    <>
      <DebugPic></DebugPic>
    

      
      

    </>
     
  );
  };
  
export default Map;