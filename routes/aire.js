const { Router } = require('express')
const rutas = Router()
const { getPolucionAire } = require('../controllers/aire')

rutas.get('/polucion', getPolucionAire)

module.exports = rutas
