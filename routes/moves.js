
const { Router } = require("express");
const { getMoves, getMove } = require("../controllers/moves"); 

const rutas = Router();


rutas.get("/", getMoves);


rutas.get("/:idMove", getMove);

module.exports = rutas;
