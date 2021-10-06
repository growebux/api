const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { routes } = require("./routes");

console.log("BestBuy section");

app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("listening on 3000");
});
