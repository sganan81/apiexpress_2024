const { Router} = require('express');
const { getEmpleados } = require('../controllers/empleados');

const rutas = Router();


rutas.get('/', getEmpleados);

module.exports = rutas;