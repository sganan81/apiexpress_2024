const { Router } = require('express')
const { getClimaActualCordenadas, getClimaActualPorCiudad, getClimaActualPorCiudadFiltrado } = require('../controllers/clima')
const rutas = Router()

rutas.get('/actual', getClimaActualCordenadas)
rutas.get('/ciudad', getClimaActualPorCiudad)
rutas.get('/ciudadFiltrado', getClimaActualPorCiudadFiltrado)

module.exports = rutas
