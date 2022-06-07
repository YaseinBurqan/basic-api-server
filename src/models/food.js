"use strict";

const Food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    FoodName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FoodType: {
      type: DataTypes.STRING,
    },
    FoodPrice: {
      type: DataTypes.NUMBER,
    },
  });

module.exports = Food;
