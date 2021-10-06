const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://eddie:1N8utt7IrFZyNy9P@cluster0.fhsts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectMongo = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once("open", () =>
      console.log(`Connected to MongoDB ${process.env.NODE_ENV}: Products DB`)
    )
    .on("error", console.error);
};

module.exports = { mongoose, connectMongo };
