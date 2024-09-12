const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middleware();
    this.rutas();
  }

  middleware() {
    this.app.use(express.static("public"));
  }

  rutas() {
    this.app.use("/pokemon", require("../routes/pokemons")); // Emiliano Correa
    this.app.use("/pokemon", require("../routes/moves")); // Haag Gomez Gaston Ivan
    this.app.use("/pokemon", require("../routes/Id_Pokemon")); //Evelin Paumgertner
    /*   this.app.use('*', (req, res) => {
            res.status(404).send('Page not found');
        }); // Integrante 2 */
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`);
    });
  }
}

module.exports = Server;
