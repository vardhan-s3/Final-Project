const express= require('express')
require('./model/player')

const bodyParser= require('body-parser')
const cors= require("cors")
const mongoose= require("mongoose")


const app= express()

app.use(bodyParser.json())
app.use(cors())

const mongooseURI= "mongodb+srv://Shan_zeeshan:bismillah@clusters.xcbbmer.mongodb.net/test"

mongoose.connect(mongooseURI)

mongoose.connection.on('connected',()=>{
    console.log('connection established')
})

mongoose.connection.on('error',(err)=>{
    console.log('Error occured',err)
})

const players= mongoose.model('player')

app.post('/create',async(req,res)=>{
    const {player}= req.body
    console.log(player)
    const newplayer= new players(player)
    try{
        newplayer.save()
        res.send(newplayer)
    }catch(e){
        res.status(422).send(e)
    }
})
app.get('/getbyname',async (req,res)=>{
    const {name}= req.query
    console.log(name)
    try{
        const result= await players.find({name})
        console.log(result)
        res.send(result)
        
    }catch(e){
        return res.status(422).send(e)
    }

})

app.get('/getbyage',async (req, res)=>{
    const {Age}= req.query
    console.log(Age)
    try{
        const result= await players.find({Age})
        res.send(result)

    }catch(e){
        res.status(422).send(e)
    }
})


app.put('/update', async (req,res)=>{
    const {id, player}= req.body
    console.log(req.body)
    try{
        
        const result= await players.findByIdAndUpdate(id,player,{new:true})
        console.log(result)
    }catch(e){
        return res.status(422).send(e)
    }
})

app.delete('/delete',async(req, res)=>{
    const {id}=req.body
    console.log(req.body)
    try{
        const result= await players.findByIdAndDelete(id)
        res.send("Deleted successfully")
    }catch(e){
        return res.status(422).send(e)
    }
})
app.listen(5000,()=>{
    console.log('listening on port 5000')
})