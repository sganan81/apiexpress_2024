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

const getClima5dias = async (req, res) => {
  const { lat, lon, units = 'metric', lang = 'sp' } = req.query

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude (lat) y Longitud (lon) son necesarias.' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${units}&lang=${lang}`)
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

const getClima5diasPorCiudad = async (req, res) => {
  const { ciudad, units = 'metric', lang = 'sp' } = req.query

  if (!ciudad) {
    return res.status(400).json({ error: 'Ingrese la ciudad para poder continuar' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${process.env.API_KEY}&lang=${lang}&units=${units}`)
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

const getClima5diasPorCodigoPostal = async (req, res) => {
  const { zip, country = 'AR', units = 'metric', lang = 'sp' } = req.query

  if (!zip) {
    return res.status(400).json({ error: 'Ingrese el codigo postal para poder continuar' })
  }

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${country}&appid=${process.env.API_KEY}&lang=${lang}&units=${units}`)
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

module.exports = { getClimaActualCordenadas, getClimaActualPorCiudad, getClima5dias, getClima5diasPorCiudad, getClima5diasPorCodigoPostal }
