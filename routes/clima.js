const { Router } = require('express')
const { getClimaActualCordenadas } = require('../controllers/clima')
const rutas = Router()

rutas.get('/actual', getClimaActualCordenadas)

module.exports = rutas
