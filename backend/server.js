const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-Parser");
const cookieParser = require("cookie-Parser");
const cors = require("cors");
const mongoose = require("mongoose");

//to be able to acces dotenv file
require("dotenv").config();

//app creating

const app = express();

//db

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    userFindAndModify: false,
  })
  .then(() => console.log("DB connected"));

//middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.unsubscribe(cookieParser());

//cors
if (process.env.NODE_ENV == "developmnet") {
  app.unsubscribe(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes

app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

//port

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
