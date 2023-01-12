const express= require('express');
const routes = express.Router();
const {Usercreate,loginpart} = require('../controller/user')
routes.post('/api/sign/',Usercreate);
routes.post('/api/login/',loginpart);

module.exports ={
    userauth:routes
}