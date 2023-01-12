const express= require('express');
const routes = express.Router();
const {createairline,getAir,deleteAir} = require('../controller/airline')
routes.post('/api/Aircreaate/',createairline);
routes.get('/api/Airtget/',getAir);
routes.delete('/api/Airtdelete/:names',deleteAir)

module.exports ={
    Airauth:routes
}