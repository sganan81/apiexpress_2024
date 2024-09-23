const { Router } = require('express')
const { getPolucionFutura } = require('../controllers/aire')
const rutas = Router()

rutas.get('/polucionfutura', getPolucionFutura)

module.exports = rutas