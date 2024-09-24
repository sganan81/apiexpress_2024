const axios = require("axios");
const { request, response } = require("express");
const { apiUrl } = require('../config/config');

const getMoves = (req = request, res = response) => {
  const { limit = 50, page = 1 } = req.query;
  const offset = (page - 1) * limit;
  const filtro = `?limit=${limit}&offset=${offset}`;

  axios
    .get(`${apiUrl}/move${filtro}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        msg: "Ok",
        data,
      });
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return res.status(404).json({
          msg: 'Error al obtener los movimientos',
        });
      }
      res.status(500).json({
        msg: 'Error en el servidor',
        error
      });
    });
};

const getMove = (req = request, res = response) => {
  const { idMove = "" } = req.params; 
  axios
    .get(`${apiUrl}/move/${idMove}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return res.status(404).json({
          msg: 'No se encontró el movimiento con el nombre o id proporcionado'
        });
      }
      res.status(500).json({
        msg: 'Error en el servidor',
        error
      });
    });
};

module.exports = {
  getMoves,
  getMove,
};
