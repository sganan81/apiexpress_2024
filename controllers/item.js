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
      if (error.response && error.response.status === 404) {
        return res.status(404).json({
          msg: 'Error al obtener los ítems',
        });
      }
      res.status(500).json({
        msg: 'Error en el servidor',
        error
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
      if (error.response && error.response.status === 404) {
        return res.status(404).json({
          msg: 'No se encontró el ítem con el ID proporcionado'
        });
      }
      res.status(500).json({
        msg: 'Error en el servidor',
        error
      });
    });
};

module.exports = {
  getItems,
  getItem,
};
