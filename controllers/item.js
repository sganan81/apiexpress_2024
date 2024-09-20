const axios = require("axios");
const { request, response } = require("express");

const getItems = (req = request, res = response) => {
  const { limit = 50, page = 1 } = req.query;
  const offset = (page - 1) * limit;
  const filtro = `?limit=${limit}&offset=${offset}`;

  axios
    .get(`https://pokeapi.co/api/v2/item${filtro}`)
    .then((axiosResponse) => { 
      const { data } = axiosResponse;
      res.status(200).json({
        msg: "Ok",
        data,
      });
    })
    .catch((error) => {
      console.error(error); 
      res.status(400).json({
        msg: "Error",
        error: error.message || "Ocurrió un error al obtener los ítems",
      });
    });
};

const getItem = (req = request, res = response) => {
  const { idItem = "" } = req.params;

  if (!idItem) {
    return res.status(400).json({
      msg: "Error",
      error: "El parámetro 'idItem' es requerido",
    });
  }

  axios
    .get(`https://pokeapi.co/api/v2/item/${idItem}`)
    .then((axiosResponse) => { 
      const { data } = axiosResponse;
      res.status(200).json({
        msg: "Ok",
        data,
      });
    })
    .catch((error) => {
      console.error(error); 
      res.status(400).json({
        msg: "Error",
        error: error.response && error.response.data
          ? error.response.data
          : error.message || "Ocurrió un error al obtener el ítem",
      });
    });
};

module.exports = {
  getItems,
  getItem,
};
