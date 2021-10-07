const mongoose = require ("mongoose");

var UserSchema = new mongoose.Schema(
    {
        name: { type: String},
        age: {String},
        gender: {type: String},
        adress: {type: String},
    },
    { collection: "users"}
);

module.exports = User = mongoose.model("user", UserSchema);