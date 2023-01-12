const mongoose = require('mongoose');
const airSchema =  new mongoose.Schema({
    names:{
        type:String,
        required:true,
        unique:true
    },
    website:{
        type:String,
    }

},{timestamps:true})

module.exports = new mongoose.model('AirLIne',airSchema)