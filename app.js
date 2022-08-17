const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 6000
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

app.listen(PORT,()=>{
  console.log('server running on ',PORT)
})