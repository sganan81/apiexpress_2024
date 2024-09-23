const { Router } = require('express')
const { getClimaActualPorCiudad } = require('../controllers/clima')
const rutas = Router()

rutas.get('/ciudad', getClimaActualPorCiudad)

module.exports = rutas
