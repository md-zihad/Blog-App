require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/authRoutes");
const validatorRouter = require("./playground/validator");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

const store = new MongoDBStore({
  uri: process.env.DB_STRING,
  collection: "sessions",
  expires: 1000 * 60 * 60 * 2,
});

const PORT = process.env.PORT || 8080;
const DB_STRING = process.env.DB_STRING;

app.set("view engine", "ejs");
app.set("views", "views");

const middlewares = [
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    resave: false,
    saveUninitialized: false,
    store: store,
  }),
];

app.use(middlewares);

app.use("/user", router);
app.use("/playground", validatorRouter);

app.get("/", (req, res) => {
  res.json("Hello World");
});

mongoose
  .connect(DB_STRING)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
