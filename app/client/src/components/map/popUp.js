import React, { useState } from "react";
import "./popup.css";
import axios from "axios";



let camperData = axios.get("http://localhost:3001/getCLient") // http eingefügt
    .then((response) => {
      //TODO add response data to Form-value-sta
    })
    .catch((error) => {
      console.error(error)
    });
camperData = camperData.data
function Popup() {

  //Eventlistener auf handleClick
  let paths = document.getElementsByTagName('path');
  try{
    for(let i = 0; i < paths.length; i++){
      paths[i].removeEventListener('click', handleClick);
  }
  }catch{}
  for(let i = 0; i < paths.length; i++){
      paths[i].addEventListener('click', handleClick);
  }

  //Hier sollten später die reservierungen ausgelesen werden//
  function setFieldColors(){

  }

//


  let [id, setid] = useState(undefined);
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    str: "",
    strNr: "",
    plz: "",
    ort: "",
    land: "",
    fzNr: "",
    kredNr: "",
    ResFrom: "",
    ResTill: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      let isfree = axios.get("http://localhost:3001/checkReservation", {
          ResFrom: formData.ResFrom,
          ResTill: formData.ResTill,
      }).then()
      if (isfree){
          if (window.confirm("Futur Reservation?")) {
              axios.post("http://localhost:3001/newClient", {
                  id: id, //id for get requests and reservations later
                  vorname: formData.vorname,
                  nachname: formData.nachname,
                  str: formData.str,
                  strNr: formData.strNr,
                  plz: formData.plz,
                  ort: formData.ort,
                  land: formData.land,
                  fzNr: formData.fzNr,
                  kredNr: formData.kredNr,
                  ResFrom: formData.ResFrom,
                  ResTill: formData.ResTill,
              });

              console.log(formData);
              setPopupOpen(false);
          };
          } else {

          }
      }




  function handleClick(e) {
    id = e.target.id;
    setPopupOpen(true);
    console.log(id);
    let elChange
    let data = axios.get("http://localhost:3001/getClient", setdata)
    function setdata(data) {
      elChange = document.getElementsByName("str")
          elChange.value = data[0].str
          elChange = document.getElementsByName("strNr")
          elChange.value = data[0].strNr
          elChange = document.getElementsByName("plz")
          elChange.value = data[0].plz
          elChange = document.getElementsByName("ort")
          elChange.value = data[0].ort
      elChange = document.getElementsByName("land")
          elChange.value = data[0].land
          elChange = document.getElementsByName("fzNr")
          elChange.value = data[0].fzNr
          elChange = document.getElementsByName("kredNr")
          elChange.value = data[0].kredNr
          elChange = document.getElementsByName("ResFrom")
          elChange.value = data[0].ResFrom
          elChange = document.getElementsByName("ResTill")
          elChange.value = data[0].ResTill
    }

  }



  return (
    <div className="App">

      {popupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Inserire nuovo cliente</h2>
            <form onSubmit={handleSubmit}>
              <label>Nome di battesimo</label>
              <input
                type="text"
                name="vorname"
                placeholder="vorname"
                value={formData.vorname}
                onChange={handleChange}
              />

              <label>Cognome</label>
              <input
                type="text"
                name="nachname"
                placeholder="nachname"
                value={formData.nachname}
                onChange={handleChange}
              />

              <label>Strada</label>
              <input
                type="text"
                name="str"
                placeholder="str"
                value={formData.str}
                onChange={handleChange}
              />

              <label>Numero civico</label>
              <input
                type="text"
                name="strNr"
                placeholder="strNr"
                value={formData.strNr}
                onChange={handleChange}
              />

              <label>Codice postale</label>
              <input
                type="text"
                name="plz"
                placeholder="PLZ"
                value={formData.plz}
                onChange={handleChange}
              />

              <label>Luogo</label>
              <input
                type="text"
                name="ort"
                placeholder="Ort"
                value={formData.ort}
                onChange={handleChange}
              />

              <label>Paese</label>
              <input
                type="text"
                name="land"
                placeholder="Land"
                value={formData.land}
                onChange={handleChange}
              />

              <label>Numero del veicolo</label>
              <input
                type="text"
                name="fzNr"
                placeholder="fzNr"
                value={formData.fzNr}
                onChange={handleChange}
              />

              <label>ResFrom</label>
              <input
                  type="date"
                  name="ResFrom"
                  value={formData.ResFrom}
                  onChange={handleChange}
              />
              <label>ResTill</label>
              <input
                  type="date"
                  name="ResTill"
                  value={formData.ResTill}
                  onChange={handleChange}
              />

              <label>Numero di carta di credito</label>
              <input
                type="text"
                name="kredNr"
                placeholder="kredNr"
                value={formData.kredNr}
                onChange={handleChange}
              />
              <div class="row">
                <button type="submit">Salva sul computer</button>
                <button class="closeBtn" onClick={() => setPopupOpen(false)}>
                  Vicino
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
