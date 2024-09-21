const axios = require('axios')
const { request, response } = require('express')
const { apiUrl } = require('../config/config')


const getPokemons = (req = request, res = response) => {
  const { limit = 50, page = 1 } = req.query
  const offset = (page - 1) * limit
  const filtro = `?limit=${limit}&offset=${offset}`

  axios
    .get(apiUrl+`/pokemon`+`${filtro}`)
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return res.status(404).json({
          msg: 'No se encontró el Pokémon con el id proporcionado'
        })
      }
      res.status(500).json({
        msg: 'Error en el servidor',
        error
      })
    })
}

const getPokemon = (req = request, res = response) => {
  const { nombre_pokemon = '' } = req.params

  if (!nombre_pokemon) {
    return res.status(400).json({
      msg: 'El parámetro nombre_pokemon es requerido'
    })
  }

  const nameRegex = /^[A-Za-z]+$/
  if (!nameRegex.test(nombre_pokemon)) {
    return res.status(422).json({
      msg: 'El parámetro nombre_pokemon debe contener solo letras (no se permiten números ni caracteres especiales)'
    })
  }

  axios
    .get(apiUrl+`/pokemon`+`${nombre_pokemon}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return res.status(404).json({
          msg: 'No se encontró el Pokémon con el nombre proporcionado'
        })
      }
      res.status(500).json({
        msg: 'Error en el servidor',
        error
      })
    })
}

module.exports = {
  getPokemons,
  getPokemon
}
