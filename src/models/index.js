"use strict";
require("dotenv").config();

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");
const people = require("./people.model.js");

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
          ssl: true,
          native: true,
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes),
};
