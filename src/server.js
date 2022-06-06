"use strict"; 
require("dotenv").config();
const PORT = process.env.PORT || 3000;


const express = require("express");
const app = express();

const notFoundHandler = require("./handlers/404");
const errorHandler = require("./handlers/500");
const peopleRoutes = require("./routes/people.route.js");

app.use(express.json());
app.use(peopleRoutes);
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
