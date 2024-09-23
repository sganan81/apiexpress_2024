const axios = require('axios')

const getCoordenadasDeCiudad = async (req, res) => {
  const { q, units = 'metric', lang = 'sp' } = req.query

  if (!q) {
    return res.status(400).json({
      msg: 'Se requiere el nombre de la ciudad'
    })
  }

  axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${q}&appid=${process.env.API_KEY}&units=${units}&lang=${lang}`)
    .then((response) => {
      const { name, lat, lon, country, state } = response.data[0]
      const filtro = {
        ciudad: name,
        latitud: lat,
        longitud: lon,
        estado: state,
        pais: country
      }
      res.status(200).json({
        msg: 'Ok',
        filtro
      })
    })
    .catch((error) => {
      console.error(error)
      if (error.response) {
        res.status(error.response.status).json({
          status: 'error',
          msg: 'Error al obtener datos del clima',
          error: error.response.data.message || error.response.statusText
        })
      } else {
        res.status(500).json({
          status: 'error',
          msg: 'Error inesperado al obtener la información',
          error: error.message
        })
      }
    })
}

module.exports = { getCoordenadasDeCiudad }
