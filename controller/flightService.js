const Flight = require('../model/flight')
exports.createFlight = async(req,res) =>{
    try{
        objectflight = {
            departureAirport:req.body.departureAirport,
            arrivalAirport: req.body.arrivalAirport,
            duration: req.body.duration,
            airline: req.body.airline,
            flightDate: req.body.flightDate,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate, 
            flightNumber: req.body.flightNumber,
        }
        const result = await Flight.create(objectflight) 
        res.send(result)
    }catch(err) {
        console.log("Failed to create",err)
    }
}
exports.deleteFlight = async(req,res)=>{
    try{
        const result = await Flight.deleteOne({flightNumber:req.params.flightNumber})
        res.send({message:"flight deleted successfully",result})
    }catch(err) {
        res.status(404).send({message:"error in internal request"})
    }
}
exports.getFlight = async(req,res)=>{
    try{
        const result = await Flight.find()
        res.send(result)
    }catch(err) {
        res.status(404).send({message:"error in internal server"})
    }

}



