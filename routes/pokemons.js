const { Router } = require("express");
const { getPokemon, getPokemons } = require("../controllers/pokemons");

const rutas = Router();

rutas.get("/", getPokemons);
rutas.get("/:id", getPokemon);

module.exports = rutas;
