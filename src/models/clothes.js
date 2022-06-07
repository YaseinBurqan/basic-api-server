"use strict";

const Clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    ClothesType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ClothesType: {
      type: DataTypes.STRING,
    },
    ClothesPrice: {
      type: DataTypes.STRING,
    },
  });

module.exports = Clothes;
