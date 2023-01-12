const mongoose = require('mongoose');
const schemaUser = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    gmail:{
       type:String,
       require:true,
       unique:true,
       isEmail:true,
       lowercase:true,
       minlength:true,
        
    },
    password:{
        type:String,
        require:true,
        unique:true,
    }
    
})
module.exports = mongoose.model('User',schemaUser)