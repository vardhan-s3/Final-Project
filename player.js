const mongoose= require('mongoose')


const player= new mongoose.Schema({
    id:Number,
    name:String,
    team:String,
    Country:String
})

mongoose.model('player',player)