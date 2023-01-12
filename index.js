const express = require('express');
const mongoose = require('mongoose');
const {userauth,flightauth,Airauth} = require('./routes')
const app = express();
app.use(express.json());
app.use(userauth)
app.use(flightauth)
app.use(Airauth)

mongoose.connect("mongodb://localhost:/AirLineService",()=>{
    console.log("Connecting to AirLineService")
})

app.listen(4500,()=>{ 
    console.log("server starting on port 4500")
})