const { Router } = require("express");
const { getAbility, getAbilities } = require("../controllers/ability");

const rutas = Router();

rutas.get("/", getAbilities);
rutas.get("/:idAbility", getAbility);

module.exports = rutas;