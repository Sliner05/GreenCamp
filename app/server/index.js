const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const { response } = require("express");
const sha256 = require("js-sha256");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "SC_Campo ",
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

// TODO Code Logic

app.listen(3030, () => {
  console.log("da Boi running on port  3001");
});
