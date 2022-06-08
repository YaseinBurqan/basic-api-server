"use strict";
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

const notFoundHandler = require("./handlers/404");
const errorHandler = require("./handlers/500");

const logger = require("./middleware/logger");

const foodRoutes = require("./routes/foodRoutes");
const clothesRoutes = require("./routes/clothesRoutes");

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome To The Main  website");
// });

app.use(foodRoutes);
app.use(clothesRoutes);

app.use(logger);

app.use("*", notFoundHandler);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Listen and Running on port ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
