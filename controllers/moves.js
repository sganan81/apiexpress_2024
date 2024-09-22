const axios = require("axios");
const { request, response } = require("express");
const { apiUrl } = require('../config/config')

const getMoves = (req = request, res = response) => {
  const { limit = 50, page = 1 } = req.query
  const offset = (page - 1) * limit
  const filtro = `?limit=${limit}&offset=${offset}`

  axios
  .get(apiUrl+`/move`+`${filtro}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        status: 'ok',
        data,
      });
    })
    .catch((error) => {
      console.error(error);
      if (error.response) {
        res.status(400).json({
          status: 'error',
          msg: 'Bad Request',
        });
      } else {
        res.status(500).json({
          status: 'error',
          msg: 'Error inesperado al obtener la información',
        });
      }
    });
};

const getMove = (req = request, res = response) => {
  const { idMove } = req.params;


  axios
    .get(apiUrl+`/move/${idMove}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        status: 'ok',
        data,
      });
    })
    .catch((error) => {
      console.error(error);
      if (error.response) {
        res.status(400).json({
          status: 'error',
          msg: 'Bad Request',
        });
      } else {
        res.status(500).json({
          status: 'error',
          msg: 'Error inesperado al obtener la información',
        });
      }
    });
};

module.exports = {
  getMoves,
  getMove,
};
