const axios = require("axios");
const { request, response } = require("express");
const { apiUrl } = require('../config/config')

const getAbilities = (req = request, res = response) => {
  const { limit = 50, page = 1 } = req.query;
  const offset = (page - 1) * limit;
  const filtro = `?limit=${limit}&offset=${offset}`;

  axios
  .get(`${apiUrl}/ability${filtro}`)
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
const getAbility = (req = request, res = response) => {
  const { idAbility = "" } = req.params; 
  axios
    .get(`${apiUrl}/ability/${idAbility}`) 
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
  getAbilities,
  getAbility,
};