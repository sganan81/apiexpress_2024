const axios = require("axios");
const { request, response } = require("express");

const getTypes = (req = request, res = response) => {
  const { limit = 50, page = 1 } = req.query;
  const offset = (page - 1) * limit;
  const filtro = `?limit=${limit}&offset=${offset}`;

  axios
    .get(`https://pokeapi.co/api/v2/type${filtro}`)
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

const getType = (req = request, res = response) => {
  const { idType = "" } = req.params;
  axios
    .get(`https://pokeapi.co/api/v2/type/${idType}`)
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
  getTypes,
  getType,
};
