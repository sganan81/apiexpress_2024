const { Router } = require("express");
const { getItem, getItems} = require("../controllers/item");

const rutas = Router();

rutas.get("/", getItems);
rutas.get("/:idItem", getItem);

module.exports = rutas;