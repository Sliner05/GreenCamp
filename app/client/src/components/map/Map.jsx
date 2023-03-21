import React, { useState } from "react";
import MapPi from "./map-picture.jpg";

//Ich han do schomol probiert s picture responsive zmache, theoretisch funktionierts

const map = () => {
    

  return (
    <div>
      <map name="myMap" id="myMap">
        <area id="node-a" shape="rect" coords="731,159,757,188" />
        <area id="node-b" shape="rect" coords="685,139,713,168" />
        <area id="node-c" shape="rect" coords="597,142,625,171" />
      </map>
      <img id="myImage" src={MapPi} usemap="#myMap" alt="Picture of the Camping Map" style={{ width: "100%", height: "100%"}}/>
    </div>
  );
}

export default map;
