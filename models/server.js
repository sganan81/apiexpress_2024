const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    /*   this.app.use('*', (req, res) => {
            res.status(404).send('Page not found');
        }); // Integrante 2 */
    this.app.use('/api/v1/clima', require('../routes/clima'))// los 2 integrantes vamos a trabajar en las mismas rutas porque se basan en clima
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server
