const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("database is connected");
});
mongoose.connection.on("error", () => {
  console.log("error to connect database");
});
