const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();
var ObjectId = require("mongodb").ObjectId;
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}
@cluster0.8g1rh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// console.log(uri);



app.get("/", (req, res) => {
  res.send("Hello Wivo!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});