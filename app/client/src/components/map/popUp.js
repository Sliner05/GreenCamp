import React, { useState } from "react";
import "./popup.css";
import axios from "axios";

function Popup() {
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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
    });

    console.log(formData);
    setPopupOpen(false);
  };

  function handleClick(e) {
    id = e.target.id;
    setPopupOpen(true);
    console.log(id);
  }

  return (
    <div className="App">
      <button id="345" onClick={handleClick}>
        Öffne Popup
      </button>
      {popupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Inserire nuovo cliente</h2>
            <form onSubmit={handleSubmit}>
              <label>Nome di battesimo</label>
              <input
                type="text"
                name="vorname"
                placeholder="Nome di battesimo"
                value={formData.vorname}
                onChange={handleChange}
              />

              <label>Cognome</label>
              <input
                type="text"
                name="nachname"
                placeholder="Cognome"
                value={formData.nachname}
                onChange={handleChange}
              />

              <label>Strada</label>
              <input
                type="text"
                name="str"
                placeholder="Strada"
                value={formData.str}
                onChange={handleChange}
              />

              <label>Numero civico</label>
              <input
                type="text"
                name="strNr"
                placeholder="Numero civico"
                value={formData.strNr}
                onChange={handleChange}
              />

              <label>Codice postale</label>
              <input
                type="text"
                name="plz"
                placeholder="Codice postale"
                value={formData.plz}
                onChange={handleChange}
              />

              <label>Luogo</label>
              <input
                type="text"
                name="ort"
                placeholder="Luogo"
                value={formData.ort}
                onChange={handleChange}
              />

              <label>Paese</label>
              <input
                type="text"
                name="land"
                placeholder="Paese"
                value={formData.land}
                onChange={handleChange}
              />

              <label>Numero del veicolo</label>
              <input
                type="text"
                name="fzNr"
                placeholder="Numero del veicolo"
                value={formData.fzNr}
                onChange={handleChange}
              />

              <label>Numero di carta di credito</label>
              <input
                type="text"
                name="kredNr"
                placeholder="Numero di carta di credito"
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
