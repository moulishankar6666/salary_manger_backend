const express = require("express");
const path = require("path");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//middleware to parse json requests
let db;
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.post("/add", async (req, res) => {});

app.get("/all", async (req, res) => {
  res.json({ data: "working all api" });
});

app.listen(port, (err) => {
  console.log("server running on port ", port);
});
