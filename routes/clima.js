const { Router } = require('express')
const { getClimaActualPorCiudad, getClimaActualPorCiudadFiltrado } = require('../controllers/clima')
const rutas = Router()

rutas.get('/ciudad', getClimaActualPorCiudad)
rutas.get('/ciudadFiltrado', getClimaActualPorCiudadFiltrado)

module.exports = rutas
