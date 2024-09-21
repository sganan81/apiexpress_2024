const axios = require('axios')

const getClimaActualCordenadas = async (req, res) => {
  try {
    const { lat, lon, units = 'metric', lang = 'sp' } = req.query

    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude (lat) y Longitud (lon) son necesarias.' })
    }

    // Hacemos la solicitud a la API de OpenWeather para obtener el clima actual
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        units,
        lang,
        appid: process.env.API_KEY
      }
    })

    // Enviamos la respuesta con el clima actual
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener datos climáticos'
    })
  }
}

module.exports = { getClimaActualCordenadas }// Corrige aquí el nombre del método exportado
