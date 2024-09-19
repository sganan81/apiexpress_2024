const { Router } = require("express");
const { getid_pokemon, getPokemonList } = require("../controllers/id_pokemon");

const rutas = Router();

rutas.get("/", getPokemonList);

rutas.get("/:id_pokemon", getid_pokemon); 

module.exports = rutas;
