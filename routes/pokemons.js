const { Router } = require('express')
const { getPokemon, getPokemons } = require('../controllers/pokemons')

const rutas = Router()

rutas.get('/', getPokemons)
rutas.get('/:nombre_pokemon', getPokemon)

module.exports = rutas
