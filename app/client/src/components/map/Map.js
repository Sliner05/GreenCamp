import React, { useState } from "react";
import MapPi from "./map-picture.jpg";
import Pic from "./pic";

//import "./map.css";

let reserviert = false;
let grr = [];

const Map = () => {//

  
  function checkIfReserviert(kundeanDat){ //Alle Kunden eines bestimmten Datums müssen übergeben werden (ALs Array), /X/ und die id des camping platzes
    
    let kundIds = [];

    //Liesst alle Reservierten kundendaten aus.
    for(let i = 0; i < kundeanDat.length; i++){
      kundIds.push(kundeanDat[i].id);
    }

    
    return kundIds;
  }


  //Add eventlisteners
 
  //end of eventlistener
  let paths = document.getElementsByTagName('path');
  for(let i = 0; i < paths.length; i++){
    
    if(!grr.includes(i)){
      paths[i].addEventListener('click', clickEvent);
      console.log(i)
      grr.push(i);
      //Add green fill for certain field
      /*Wird später entfernnt und durch datenbank reservierungen daten ersetze*/  paths[i].classList.add('frei');

    }
    


  }
  //console.log(grr);
  
  function clickEvent(el){
    //Um zeimal durchlaufen zu verhindern
    let a = 0;
    a++
    
    //console.log("Clicked");
    

    let targ = el.currentTarget;
    //console.log(targ + "");//
    

    //reserviert = reserviert;
    //debug//
    if((a % 2) === 1){
      if(reserviert){reserviert = false;}else{reserviert= true;}
    }
   


//
    if(reserviert == true){
      try{
        targ.classList.remove('frei');
      }catch(er){console.log('class frei konnte nicht entfernt werden!');}
      targ.classList.add('reserviert');
      console.log("classlist in res" + targ.classList);
    }
    if(reserviert == false){//else

      try{
        targ.classList.remove('reserviert');
      }catch(er){console.log('class reserviert konnte nicht entfernt werden!');}
      targ.classList.add('frei');
      console.log("classlist in frei" + targ.classList);
    }


    
  }
  
  return (
    <>
      <Pic></Pic>
    

      
      

    </>
     
  );
  };
  
export default Map;