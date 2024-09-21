const { Router } = require('express')
const { getClimaActualCordenadas, getClimaActualPorCiudad, getClima5dias } = require('../controllers/clima')
const rutas = Router()

rutas.get('/actual', getClimaActualCordenadas)
rutas.get('/ciudad', getClimaActualPorCiudad)
rutas.get('/extendido', getClima5dias)

module.exports = rutas
