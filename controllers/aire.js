const axios = require('axios')

const getPolucionAire = async (req, res) => {
  const { lat, lon, units = 'metric', lang = 'sp' } = req.query

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude y Longitus son necesarias.' })
  }

  axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&lang=${lang}&units=${units}`)
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

module.exports = { getPolucionAire }
