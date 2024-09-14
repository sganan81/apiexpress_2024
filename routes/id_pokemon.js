const { Router } = require("express");
const { getid_pokemon, getPokemon1 } = require("../controllers/id_pokemon");

const rutas = Router();

rutas.get("/", getPokemon1);

rutas.get("/:id_pokemon", getid_pokemon); 

module.exports = rutas;
