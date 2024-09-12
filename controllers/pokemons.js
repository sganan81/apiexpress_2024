const axios = require("axios");
const { request, response } = require("express");

const getPokemons = (req = request, res = response) => {
  const { results, count, next, previous } = req.query;
  console.log(results, count, next, previous);
  const filtro = results ? `?id=${results}` : "";
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${filtro}`)
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

const getPokemon = (req = request, res = response) => {
  const { idPokemon = "" } = req.params;
  console.log(idPokemon);
  axios
    .get(`https://pokeapi.co/api/v2/${idPokemon}`)
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
  getPokemons,
  getPokemon,
};
