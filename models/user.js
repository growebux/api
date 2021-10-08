const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    address: { type: String },
  },
  { collection: "users" }
);

module.exports = User = mongoose.model("user", UserSchema);
