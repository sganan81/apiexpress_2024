const { Router } = require('express')
const { getPolucionFutura } = require('../controllers/aire')
const rutas = Router()

rutas.get('/polucionFutura', getPolucionFutura)

module.exports = rutas
