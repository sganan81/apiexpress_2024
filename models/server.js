
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
   // this.app.use("/moves", require("../routes/moves")); // Haag Gomez Gaston Ivan
    this.app.use("/id_pokemon", require("../routes/id_pokemon")); //Evelin Paumgertner
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;


