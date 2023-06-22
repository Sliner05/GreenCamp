import React, { useState } from "react";
import MapPi from "./map-picture.jpg";
import Pic from "./pic";
import Popup from "./popUp";
import Numbersearch from "./numbersearch";
import axios from "axios";


async function reservations(){
  console.log("Start Axios req");
  let data = axios.get('https://localhost:3001/getIdsRes').then( (res) => {
    console.log(res);
  });
  
  let campings = document.getElementsByTagName('path');
  //console.log(Promise.resolve(data));
  for(let i = 0; i < campings; i++){

    
  }

}


const Map = () => {
  
  //set reservierungen
  reservations();
  
  return (
    <>
    <Popup></Popup>
    <Numbersearch id="searchBar"></Numbersearch>
      <Pic></Pic>
      
      
      
      

    </>
     
  );
  };
  
export default Map;