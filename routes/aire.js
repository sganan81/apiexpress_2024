const { Router } = require('express')
const rutas = Router()
const { getPolucionAire, getPolucionAireHistorica } = require('../controllers/aire')

rutas.get('/polucion', getPolucionAire)
rutas.get('/polucionHistorica', getPolucionAireHistorica)

module.exports = rutas
