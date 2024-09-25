const axios = require('axios')

const getClimaPorCoordenadasFiltrado = async (req, res) => {
  const { lon, lat, units = 'metric', lang = 'sp' } = req.query

  if (!lon || !lat) {
    return res.status(400).json({
      msg: 'Se requiere la latitud y la longitud'
    })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${units}&lang=${lang}`)
    .then((response) => {
      const { main, wind, weather, lat, lon } = response.data
      const filtro = {
        descripcion: weather[0].description,
        temperatura: main.temp,
        temp_minima: main.temp_min,
        temp_maxima: main.temp_max,
        sensacion_termica: main.feels_like,
        humedad: main.humidity,
        viento: wind.speed,
        latitud: lat,
        longitud: lon
      }
      res.status(200).json({
        msg: 'Ok',
        filtro
      })
    })
    .catch((error) => {
      console.error(error)
      if (error.response) {
        // Errores de la respuesta de la API (como un 404 si las coordenadas no se encuentran)
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

const getClimaPorCiudadFiltrado = async (req, res) => {
  const { units = 'metric', lang = 'sp' } = req.param
  const { ciudad } = req.params
  if (!ciudad) {
    return res.status(400).json({
      msg: 'Se requiere la ciudad.'
    })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.API_KEY}&units=${units}&lang=${lang}`)
    .then((response) => {
      const { main, wind, weather } = response.data
      const filtro = {
        descripcion: weather[0].description,
        temperatura: main.temp,
        temp_minima: main.temp_min,
        temp_maxima: main.temp_max,
        sensacion_termica: main.feels_like,
        humedad: main.humidity,
        viento: wind.speed
      }
      res.status(200).json({
        status: 'ok',
        data: filtro
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
module.exports = { getClimaPorCoordenadasFiltrado, getClimaPorCiudadFiltrado }
