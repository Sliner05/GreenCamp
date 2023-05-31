import React, { useState } from "react";
import "./popup.css";
import axios from "axios";  



function Popup() {
  let [id, setid] = useState(undefined);
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    fzNr: "",
    strNr: "",
    str: "",
    plz: "",
    ort: "",
    land: "",
    kredNr: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    axios.post("http://localhost:3001/newClient" , {
    id: id, //id for get requests and reservations later
    vorname: formData.vorname,
    nachname: formData.nachname,
    fzNr: formData.fzNr,
    strNr: formData.strNr,
    str: formData.str,
    plz: formData.plz,
    ort: formData.ort,
    land: formData.land,
    kredNr: formData.kredNr
    });

    console.log(formData);
    setPopupOpen(false);
  };

  function handleClick(e) {
    id = e.target.id
    setPopupOpen(true)
    console.log(id);
  }

  return (
    <div className="App">
      <button id="345" onClick={handleClick}>Öffne Popup</button>
      {popupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Daten eingeben</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="vorname"
                placeholder="Vorname"
                value={formData.vorname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="nachname"
                placeholder="Nachname"
                value={formData.nachname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="fzNr"
                placeholder="Fahrzeugnummer"
                value={formData.fzNr}
                onChange={handleChange}
              />
              <input
                type="text"
                name="strNr"
                placeholder="Straßennummer"
                value={formData.strNr}
                onChange={handleChange}
              />
              <input
                type="text"
                name="str"
                placeholder="Straße"
                value={formData.str}
                onChange={handleChange}
              />
              <input
                type="text"
                name="plz"
                placeholder="PLZ"
                value={formData.plz}
                onChange={handleChange}
              />
              <input
                type="text"
                name="ort"
                placeholder="Ort"
                value={formData.ort}
                onChange={handleChange}
              />
              <input
                type="text"
                name="land"
                placeholder="Land"
                value={formData.land}
                onChange={handleChange}
              />
              <input
                type="text"
                name="kredNr"
                placeholder="Kreditkartennummer"
                value={formData.kredNr}
                onChange={handleChange}
              />
              <div class="row">
                <button type="submit">Absenden</button>
                <button class="closeBtn" onClick={() => setPopupOpen(false)}>
                  Schließen
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
