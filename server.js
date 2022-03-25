const express = require("express");
const app = express();
const { connectDB } = require("./database");
const questionRoute = require("./Routes/question.route");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
connectDB();

app.use("/", questionRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log("server listening on port " + process.env.PORT);
});
