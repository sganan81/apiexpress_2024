const axios = require('axios')

const getClimaActualCordenadas = async (req, res) => {
  // Cambia req.params por req.query
  const { lat, lon, units = 'metric', lang = 'sp' } = req.query

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude (lat) y Longitud (lon) son necesarias.' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${units}&lang=${lang}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getClimaActualPorCiudadFiltrado = async (req, res) => {
  const { ciudad, lang = 'sp' } = req.query

  if (!ciudad) {
    return res.status(400).json({ error: 'La ciudad es necesaria para continuar.' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.API_KEY}&lang=${lang}&units=metric`)
    .then((response) => {
      // Extraemos los datos relevantes
      const { main, wind, weather, name } = response.data

      // Creamos el objeto filtrado con los datos deseados
      const climaFiltrado = {
        ciudad: name,
        descripcion: weather[0].description,
        temperatura_maxima: main.temp_max,
        temperatura_minima: main.temp_min,
        sensacion_termica: main.feels_like,
        viento: wind.speed
      }

      // Enviamos la respuesta con los datos filtrados
      res.status(200).json({
        msg: 'Ok',
        clima: climaFiltrado
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error: error.message
      })
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
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = { getClimaActualCordenadas, getClimaActualPorCiudadFiltrado, getClimaActualPorCiudad }
