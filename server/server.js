require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Cors = require("cors");
const UserRoute = require("./routes/user.route");
const PORT = process.env.PORT;

// database connection
require("./database/db");

// middleware
app.use(bodyParser.json());
app.use(Cors());

// model
require("./models/user.model");

// routes
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
