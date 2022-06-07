"use strict";
const express = require("express");

const { Food } = require("../models/index");

const FoodRouter = express.Router();

FoodRouter.get("/food", getFood);
FoodRouter.get("/food/:id", getOneFood);
FoodRouter.post("/food", addFood);
FoodRouter.put("/food/:id", updateFood);
FoodRouter.delete("/food/:id", deleteFood);

async function getFood(req, res) {
  const allFood = await Food.findAll();
  res.status(200).json(allFood);
}

async function getOneFood(req, res) {
  const foodId = parseInt(req.params.id);
  let foodName = await Food.findOne({ where: { id: foodId } });
  res.status(200).json(foodName);
}

async function addFood(req, res) {
  let newFood = req.body;
  let food = await Food.create(newFood);
  res.status(201).json(food);
}

async function updateFood(req, res) {
  let foodId = parseInt(req.params.id);
  let updateFood = req.body;
  let foundFood = await Food.findOne({ where: { id: foodId } });
  if (foundFood) {
    let updatedFood = await foundFood.update(updateFood);
    res.status(201).json(updatedFood);
  } else {
    res.status(404).json({ message: "Food not found" });
  }
}

async function deleteFood(req, res) {
  let foodId = parseInt(req.params.id);
  let deleteFood = await Food.destroy({ where: { id: foodId } });
  res.status(204).json(deleteFood);
}

module.exports = FoodRouter;
