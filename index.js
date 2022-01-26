const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();
var ObjectId = require("mongodb").ObjectId;
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;




app.get("/", (req, res) => {
  res.send("Hello Wivo!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});