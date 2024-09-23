const { Router } = require('express')
const { getClimaPorCoordenadasFiltrado, getClimaPorCiudad } = require('../controllers/clima')
const rutas = Router()

rutas.get('/coordenadas', getClimaPorCoordenadasFiltrado)
rutas.get('/ciudad/:ciudad', getClimaPorCiudad)
module.exports = rutas
