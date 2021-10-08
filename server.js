require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const { connectMongo } = require("./db/mongo");
const { routes } = require("./routes");

const app = express();

connectMongo();
app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("listening on 3000");
});
