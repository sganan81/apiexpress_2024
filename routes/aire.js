const { Router } = require('express')
const rutas = Router()
const { getPolucionAire, getPolucionAireHistorica, getPolucionAireExtendida } = require('../controllers/aire')

rutas.get('/polucion', getPolucionAire)
rutas.get('/polucionHistorica', getPolucionAireHistorica)
rutas.get('/polucionExtendida', getPolucionAireExtendida)

module.exports = rutas
