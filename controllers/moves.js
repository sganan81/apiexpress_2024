const axios = require("axios");
const { request, response } = require("express");

const getMoves = (req = request, res = response) => {
  const { limit = 50 } = req.query; 
  const filtro = `?limit=${limit}`; 

  axios
    .get(`https://pokeapi.co/api/v2/move${filtro}`)
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
    .get(`https://pokeapi.co/api/v2/move/${idMove}`)
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
