const express= require('express');
const routes = express.Router();
const {createFlight, getFlight,deleteFlight} = require('../controller/flightService')
routes.post('/api/flightcreaate/',createFlight);
routes.get('/api/flightget/',getFlight);
routes.delete('/api/flightget/',deleteFlight)

module.exports ={
    flightauth:routes
}