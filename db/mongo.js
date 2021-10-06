const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose.connect(process.env.MONGODB_URI, {
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
