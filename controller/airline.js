const Airline = require('../model/airline');
exports.createairline = async(req,res)=>{
    objectair ={
        names : req.body.names
    }
    
    try{
        const Result = await Airline.create(objectair)
        res.status(200).json({
            sucess:true,
            message:"successfully created Airline",
            data:Result
        })
    }catch(err){
        res.status(404).send({message:"internal error"})
    }
}
exports.deleteAir = async(req,res)=>{
    try{
        const result = await Airline.deleteOne({names:req.params.names})
        res.send({message:"flight deleted successfully",result})
    }catch(err) {
        res.status(404).send({message:"error in internal request"})
    }
}
exports.getAir = async(req,res)=>{
    try{
        const result = await Airline.find()
        res.send(result)
    }catch(err) {
        res.status(404).send({message:"error in internal server"})
    }

}
