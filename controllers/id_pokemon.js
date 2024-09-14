const axios = require("axios");
const { request, response } = require("express");

const getPokemon1 = (req = request, res = response) => {
  const { id_pokemon, count, next, previous } = req.query; 
  console.log(id_pokemon, count, next, previous);

  const filtro = id_pokemon ? `/${id_pokemon}` : ""; 

  axios
    .get(`https://pokeapi.co/api/v2/pokemon${filtro}`) 
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

const getid_pokemon = (req = request, res = response) => {
  const { id_pokemon = "" } = req.params; 

  if (!id_pokemon) {
    return res.status(400).json({
      msg: "El parámetro id_pokemon es requerido"
    });
  }
  console.log(id_pokemon);

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`) 
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
  getPokemon1,
  getid_pokemon,
};

