const express = require('express')
require('dotenv').config();
const  cors = require('cors')


class Server {

    
    constructor() {
        this.app = express();
        this.port=process.env.PORT;
        this.usariosPath='/api/usuarios'
        
        //midelwares
       this.midelwares();
        //rutas
        this.routs();
    }
    
    midelwares(){
        //cors
        this.app.use(cors());
        //lectura parseo de body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
      
    }

    routs(){
      this.app.use(this.usariosPath , require('../routes/users'))  
    }
    

    lister() {
        this.app.listen(this.port, () => {
            console.log('servidor correindo en puerto', this.port);
        })
    }
}

module.exports = Server