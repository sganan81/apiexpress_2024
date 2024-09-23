const { Router } = require('express')
const { getClimaPorCoordenadasFiltrado, getClimaPorCiudadFiltrado } = require('../controllers/clima')
const rutas = Router()

rutas.get('/coordenadas', getClimaPorCoordenadasFiltrado)
rutas.get('/ciudad/:ciudad', getClimaPorCiudadFiltrado)
module.exports = rutas
