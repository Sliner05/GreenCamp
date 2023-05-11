const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const { response } = require("express");
const sha256 = require("js-sha256");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "SC_Campo",
  host: "i-kf.ch",
  password: "6cp&4klP",
  database: "SC_CampoDB",
});
db.connect((err) => {
  if (err) {
    console.log("DB Connection error: ", err);
  } else {
    console.log("Connected to DB!");
  }
});

app.post("/newClient", (req, res) => {
  let CamperCount;
  console.log("post on /NewCLient");
  // no id -> auto increment
  vorname = req.body.vorname;
  nachname = req.body.nachname;
  fzNr = req.body.fzNr;
  strNr = req.body.strNr;
  str = req.body.str;
  plz = req.body.plz;
  ort = req.body.ort;
  land = req.body.land;
  kredNr = req.body.kredNr;
  db.query(
    "select count(*) from TCamper where CamperVorname = ? and CamperNachname = ?",
    [vorname, nachname],
    (err, resD) => {
      if (err) {
        console.log(err);
      } else {
        if (resD[0]["count(*)"] == 0) {
          console.log("count 0");
          db.query(
            "INSERT INTO TCamper(CamperVorname, CamperNachname, CamperStrNr, CamperStrasse, CamperLand, CamperKredNr, CamperPLZ) VALUES (?,?,?,?, ?, ?, ?)",
            [vorname, nachname, strNr, str, land, kredNr, plz],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send("Values Inserted");
              }
            }
          );
        } else {
          console.log("count >0");
          res.send("Values already exist");
        }
      }
    }
  ); /*.then(() => {
    console.log(CamperCount);
    if (CamperCount === 0) {
      "INSERT INTO TCamper(CamperVorname, CamperNachname, CamperStrNr, CamperStrasse, CamperLand, CamperKredNr, CamperPLZ) VALUES (?,?,?,?, ?, ?, ?)",
        [vorname, nachname, strNr, str, land, kredNr, plz],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        };
    } else {
      res.send("Values already exist");
    }
  });*/
});

app.listen(3001, () => {
  console.log("da Boi running on port  3001");
});
