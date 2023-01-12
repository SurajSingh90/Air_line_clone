const mongoose = require('mongoose');   
const bookingSChema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Flight",

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    status:{
        type:String,
        required:true,
        default:"In progress",
        enum:["In progress", "booked",'cancel']
    }
},{timestamps:true});
module.exports = mongoose.model('booking', bookingSChema)