
const axios = require("axios");
const { request, response } = require("express");

const getMoves = (req = request, res = response) => {
  const { results, count, next, previous } = req.query;
  console.log(results, count, next, previous);
  const filtro = results ? `?limit=${results}` : ""; 
  axios
    .get(`https://pokeapi.co/api/v2/move/${filtro}`)
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
  const { idMove = "" } = req.params; 
  console.log(idMove);
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
