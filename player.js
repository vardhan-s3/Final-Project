const mongoose= require('mongoose')


const player= new mongoose.Schema({
    id:Number,
    name:String,
    team:String,
    Age:Number
})

mongoose.model('player',player)