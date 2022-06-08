"use strict";
const express = require("express");
const app = express();

const { clothes } = require("../models/index");

const ClothesRouter = express.Router();

ClothesRouter.get("/", handelhome);
ClothesRouter.get("/clothes", getClothes);
ClothesRouter.get("/clothes/:id", getOneClothes);
ClothesRouter.post("/clothes", createClothes);
ClothesRouter.put("/clothes/:id", updateClothes);
ClothesRouter.delete("/clothes/:id", deleteClothes);

function handelhome(req, res) {
  res.status(200).send("Hello User");
}

async function getClothes(req, res) {
  const allClothes = await clothes.findAll();
  res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
  const clothesId = parseInt(req.params.id);
  let clothesName = await clothes.findOne({ where: { id: clothesId } });
  res.status(200).json(clothesName);
}

async function createClothes(req, res) {
  let newClothes = req.body;
  let person = await clothes.create(newClothes);
  res.status(201).json(person);
}

async function updateClothes(req, res) {
  let clothesId = parseInt(req.params.id);
  let updateClothes = req.body;
  let foundClothes = await clothes.findOne({ where: { id: clothesId } });
  if (foundClothes) {
    let updatedClothes = await foundClothes.update(updateClothes);
    res.status(201).json(updatedClothes);
  } else {
    res.status(404).json({ message: "Food not found" });
  }
}

async function deleteClothes(req, res) {
  let clothesId = parseInt(req.params.id);
  let deleteClothes = await clothes.destroy({ where: { id: clothesId } });
  res.status(204).json(deleteClothes);
}

module.exports = ClothesRouter;
