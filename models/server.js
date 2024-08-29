const express = require('express');

class Server {

    constructor(){        
        this.app = express();
        this.port = process.env.PORT || 3000;   
        this.rutas();
    }

    rutas(){
        this.app.use('/api/v1/peliculas', require('../routes/peliculas')); // Integrante 1        
        this.app.use('/api/v1/empleados', require('../routes/empleados')); // Integrante 2
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`La API esta escuchando en el this.PORT ${this.port}`)
        });
    }
}

module.exports = Server;