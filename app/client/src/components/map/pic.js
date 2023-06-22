import React from "react";
import "./pic.css";

import { ReactComponent as SvgIcon } from "./img/map-svg.svg";


/*
Im svg müssen paths mit css style="" enthalten!
*/
//Glovale variabel


function Pic(PicWidth = "1066.000000pt", PicHeight = "686.000000pt") {
  
  //1600.000000pt,  1029.000000pt
  


  return (
    <>
     <div>
      
     <SvgIcon id="map" width={1200}
        height={1200}
        svgbackground="#fff"
        tool="auto"
        //detectautopan={false}
        miniatureposition="none"
        scalefactorowheel={1.1}
        scalefactormin={0.8}
        scalefactormax={10}/>
      
    </div>
    </>
  );
}

export default Pic;

/**
 * SvgIcon id="map" width={500}
        height={500}
        svgbackground="#fff"
        tool="auto"
        //detectautopan={false}
        miniatureposition="none"
        scalefactorowheel={1.1}
        scalefactormin={0.8}
        scalefactormax={10}/>
      
 */
