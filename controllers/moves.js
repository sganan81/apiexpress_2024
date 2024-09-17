const axios = require("axios");
const { request, response } = require("express");


const AUTH_KEY = 'aprobado'; 
const AUTH_TOKEN = 'token-gaston'; 


const checkAuthorization = (req) => {
  const token = req.headers[AUTH_KEY];
  
  return token === AUTH_TOKEN; 
};

const getMoves = (req = request, res = response) => {
  
  if (!checkAuthorization(req)) {
    return res.status(401).json({
      status: 'error',
      msg: 'Unauthorized'
    });
  }

  const { limit } = req.query;
  const filtro = limit ? `?limit=${limit}` : "";

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
  // Verificar autorización
  if (!checkAuthorization(req)) {
    return res.status(401).json({
      status: 'error',
      msg: 'Unauthorized'
    });
  }

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
