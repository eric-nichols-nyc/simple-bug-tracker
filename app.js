const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 6000
const User = require('./models/user')
const cors = require('cors')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo yeahhh')
})
mongoose.connection.on('error',(err)=>{
    console.log('error',err)
})
app.use(cors())

app.use(express.json())

app.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    try{
  
         if(!email || !password){
             return res.status(422).json({error:"plase add all the fields"})
         }
         const user = await User.findOne({email})
         if(!user){
             return res.status(404).json({error:"user dosent exist with that email"}) 
         }
         const doMatch =  await bcrypt.compare(password,user.password)
         if(doMatch){
                const token = jwt.sign({userId:user._id},JWT_SECRET)
                res.status(201).json({token})
         }else{
             return res.status(401).json({error:"email or password is invalid"}) 
         }
         
     }catch(err){
         console.log(err)
     }
 
 })

app.listen(PORT,()=>{
  console.log('server running on ',PORT)
})