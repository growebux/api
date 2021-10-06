const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    content: [String],
  },
  { collection: "products" }
);

module.exports = Product = mongoose.model("product", ProductSchema);
