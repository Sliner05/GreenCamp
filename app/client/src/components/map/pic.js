import React from "react";
import "./pic.css";

import { ReactComponent as SvgIcon } from "./img/map-svg.svg";


/*
Im svg müssen paths mit css style="" enthalten!
*/

function Pic(PicWidth = "1066.000000pt", PicHeight = "686.000000pt") {
  
  //1600.000000pt,  1029.000000pt
  


  return (
    <>
     <div>
     <SvgIcon id="map" width={500}
        height={500}
        SVGBackground="#fff"
        tool="auto"
        detectAutoPan={false}
        miniaturePosition="none"
        scaleFactorOnWheel={1.1}
        scaleFactorMin={0.8}
        scaleFactorMax={10}/>
      
    </div>
    </>
  );
}

export default Pic;
