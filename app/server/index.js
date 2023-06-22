const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const { response } = require("express");
const sha256 = require("js-sha256");
//const node: util = require("node:util");

app.use(cors());
app.use(express.json());


// don't look here
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
    console.log("Connected tos DB!");
  }
});
// initial stuff

//begin code logic
app.get("/getCLient", (req, res) => {
  console.log("post on /getClient with areaId \"" + id +"\"")
  id = req.body.id

  let user = db.query(
      'select c.CamperId, CamperVorname, CamperNachname, ResFrom, ResTill from TCamper c natural join TAreas a natural join TReservationen r where r.AreaId = ? and a.AreaId = ?;',
      [id, id],
      (err, resD) =>{
        //Code logics
      }
  )
  //read data from query above in var's'
  let data = []
  let cId = user[0].CamperId
  let vorname = user[0].CamperVorname
  let nachname = user[0].CamperNachname
  let ResFrom = user[0].ResFrom
  let ResTill = user[0].ResTill

// initialize var's for query below
  let str
  let strNr
  let plz
  let ort
  let land
  let fzNr
  let kredNr

  let userData = db.query('select * from TUser where Id = ?',
      [id],
      (err, resD) =>{
        str = res[0].str
        strNr = res[0].strNr
        plz = res[0].plz
        ort = res[0].ort
        land = res[0].land
        fzNr = res[0].fzNr
        kredNr = res[0].kredNr
      }
      )
  //push var's in array
  data.push(cId, vorname, nachname, ResFrom, ResTill, str, strNr, plz, ort, land, fzNr, kredNr)
  res = data
})

app.get("/checkClient", (req, res) => {
    let isFree;
    let from = body.req.ResFrom
    let till = body.req.ResTill
    console.log("post on /CheckClient")
    db.query(
        "SELECT count(*) FROM TReservationen WHERE ResFrom NOT BETWEEN ? AND ? AND ResTill NOT BETWEEN ? AND ?",
        [from, till, from, till],
        (err, resD) => {
            if (err) {
                console.log(err);
            } else {
                if (resD[0]["count(*)"] == 0) {
                    isFree = true;
                } else {
                    isFree = false
                }
            }
        })
    res = isFree
})


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
  );
});

app.listen(3001, () => {
  console.log("da Boi running on port  3001");
});

app.post("/getOccupiedSpaces", (req, res) => {
    db.query("SELECT areaId FROM TReservationen WHERE ResFrom BETWEEN ? AND ? OR ResTill BETWEEN ? AND ?;",
        [],
        (err, result) => {
            if (err){
                console.log(err)
            }
            else{
              return res[0];
            }
        }
        )
});

app.post("/getFreeSpaces", (req, res) => {
    db.query("SELECT areaId FROM TReservationen WHERE ResFrom not BETWEEN ? AND ? AND ResTill not BETWEEN ? AND ?;",
        [],
        (err, result) => {
            if (err){
                console.log(err)
            }
            else{
                return res[0];
            }
        }
    )
});
