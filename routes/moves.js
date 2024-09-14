
const { Router } = require("express");
const { getMoves, getMove } = require("../controllers/moves"); 

const rutas = Router();

// Ruta para obtener una lista de movimientos
rutas.get("/", getMoves);

// Ruta para obtener un movimiento específico por su ID o nombre
rutas.get("/:idMove", getMove);

module.exports = rutas;
