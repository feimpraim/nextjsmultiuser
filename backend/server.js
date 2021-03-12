const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-Parser");
const cookieParser = require("cookie-Parser");
const cors = require("cors");
const mongoose = require("mongoose");

//bring routes

const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

//to be able to acces dotenv file
require("dotenv").config();

//app creating

const app = express();

//db

mongoose
  .connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

//middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.unsubscribe(cookieParser());

//routes middleware

app.use("/api", blogRoutes);
app.use("/api", authRoutes);

//cors
if (process.env.NODE_ENV == "developmnet") {
  app.unsubscribe(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//port

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
