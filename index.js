const express = require("express");
const app = express();
const db = require("./database_connection");

//middleware to parse json requests
app.use(express.json());

app.post("/addspend", async (req, res) => {
  try {
    const query = `INSERT INTO spends (spending_name,spending_type,amount) VALUES(?,?,?);`;
    await db.run(query, ["grocery", "House Expenses", 5000], (err) => {
      if (err) {
        console.error(err.message);
      } else {
        res.json({ data: "inserted successfully" });
      }
    });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/allspends", async (req, res) => {
  try {
    const query = `SELECT * FROM spends`;
    await db.all(query, (err, data) => {
      if (err) {
        console.error(err.msg);
      } else {
        res.json({ data });
      }
    });
  } catch (error) {
    console.error(err.msg);
  }
});

app.listen(4000, (err) => {
  console.log("server running on port 4000");
});
