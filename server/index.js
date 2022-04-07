const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
console.log(process.env.PORT);
const sequelize = require("./sequelize");

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));
//Get endpoints here

app.get("/api/donuts", async (req, res) => {
  let info = await sequelize.query(`SELECT * FROM donuts`);
  res.status(200).send(info);
});

app.get("/api/drinks", async (req, res) => {
  let info = await sequelize.query(`SELECT * FROM drinks`);
  res.status(200).send(info);
});

app.post("/api/neworder", async (req, res) => {
  let { customer, items } = req.body;

  sequelize
    .query(
      `INSERT INTO orders(customer, items)
  VALUES('${customer}', '${items}')`
    )
    .then((result) => {
      res.status(201).send(result[0]);
    })
    .catch((err) => console.log(err));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
