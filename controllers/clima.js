const axios = require('axios')

const getClimaActualPorCiudadFiltrado = async (req, res) => {
  const { ciudad, lang = 'sp' } = req.query

  if (!ciudad) {
    return res.status(400).json({ error: 'La ciudad es necesaria para continuar.' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.API_KEY}&lang=${lang}&units=metric`)
    .then((response) => {
      const { main, wind, weather, name } = response.data

      const climaFiltrado = {
        ciudad: name,
        descripcion: weather[0].description,
        temperatura_maxima: main.temp_max,
        temperatura_minima: main.temp_min,
        sensacion_termica: main.feels_like,
        viento: wind.speed
      }

      res.status(200).json({
        msg: 'Ok',
        clima: climaFiltrado
      })
    })
    .catch((error) => {
      console.error(error)
      if (error.response) {
        return res.status(error.response.status).json({
          status: 'error',
          msg: 'Error al obtener datos del clima',
          error: error.response.data.message || error.response.statusText,
          statusCode: error.response.status
        })
      } else {
        res.status(500).json({
          status: 'error',
          msg: 'Error inesperado al obtener la información',
          error: error.message,
          statusCode: 500
        })
      }
    })
}

const getClimaActualPorCiudad = async (req, res) => {
  const { ciudad, lang = 'sp' } = req.query

  if (!ciudad) {
    return res.status(400).json({ error: 'La ciudad es necesaria para continuar.' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.API_KEY}&lang=${lang}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.error(error)
      if (error.response) {
        return res.status(error.response.status).json({
          status: 'error',
          msg: 'Error al obtener datos del clima',
          error: error.response.data.message || error.response.statusText,
          statusCode: error.response.status
        })
      } else {
        res.status(500).json({
          status: 'error',
          msg: 'Error inesperado al obtener la información',
          error: error.message,
          statusCode: 500
        })
      }
    })
}

module.exports = { getClimaActualPorCiudadFiltrado, getClimaActualPorCiudad }
