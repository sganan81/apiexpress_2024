const { Router } = require('express')
const { getClimaActualCordenadas, getClimaActualPorCiudad, getClima5dias, getClima5diasPorCiudad, getClima5diasPorCodigoPostal } = require('../controllers/clima')
const rutas = Router()

rutas.get('/actual', getClimaActualCordenadas)
rutas.get('/ciudad', getClimaActualPorCiudad)
rutas.get('/extendido', getClima5dias)
rutas.get('/extendidoPorCiudad', getClima5diasPorCiudad)
rutas.get('/extendidoPorCodigoPostal', getClima5diasPorCodigoPostal)

module.exports = rutas
