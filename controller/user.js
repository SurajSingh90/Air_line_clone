const user = require('../model/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../configs/auth.congig')
exports.Usercreate = async (req,res)=>{
   userobject = {
    name: req.body.name,
    gmail:req.body.gmail,
    password: bcrypt.hashSync(req.body.password,8)

   }
   try{
     const result = await user.create(userobject);
     res.send(result);
   }catch(err){
    res.status(404).send({message:"internal error"})
   }
}

exports.loginpart = async(req,res)=>{

    const result = await user.findOne({name:req.body.name})
    if(!result){
        res.status(404).send({message:"user  is not found"})
        return
    }
    const passwordValid = bcrypt.compareSync(req.body.password,result.password)
    if(!passwordValid){
        res.status(404).send({message:"user and password is not found"})
        return
    }
    const token = jwt.sign({id:result.name},config.secretkey,{
        expiresIn:7800
    }) 
    res.status(200).send({
        name:result.name,
        gmail:result.gmail,
        accessToken: token 
    })
}