import React, { useState } from "react";
import MapPi from "./map-picture.jpg";
import Pic from "./pic";

//import "./map.css";



const Map = () => {

  //Add eventlisteners
  let paths = document.getElementsByTagName('path');
  for(let i = 0; i < paths.length; i++){
    paths[i].addEventListener('mouseover', hoverEvent);
  }

  

  function hoverEvent(el){
    console.log("Hovered");
  }
  
  return (
    <>
      <Pic></Pic>
    

      
      

    </>
     
  );
  };
  
export default Map;