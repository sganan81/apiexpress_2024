const { Router } = require("express");
const { getType, getTypes } = require("../controllers/type");

const rutas = Router();

rutas.get("/", getTypes);
rutas.get("/:idType", getType);

module.exports = rutas;