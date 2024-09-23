const { Router } = require('express')
const { getCoordenadasDeCiudad } = require('../controllers/geocoding')
const rutas = Router()

rutas.get('/ciudad', getCoordenadasDeCiudad)

module.exports = rutas
