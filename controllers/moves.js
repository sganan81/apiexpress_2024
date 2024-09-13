const axios = require("axios");
const { request, response } = require("express");

const getMoves = (req = request, res = response) => {
  const { limit } = req.query; 
  const filtro = limit ? `?limit=${limit}` : ""; 
  axios
    .get(`https://pokeapi.co/api/v2/move${filtro}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        msg: "Ok",
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: "Error",
        error,
      });
    });
};

const getMove = (req = request, res = response) => {
  const { idMove } = req.params; 
  axios
    .get(`https://pokeapi.co/api/v2/move/${idMove}`)
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        msg: "Ok",
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: "Error",
        error,
      });
    });
};

module.exports = {
  getMoves,
  getMove,
};

