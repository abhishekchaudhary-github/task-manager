const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{type:String,required:[true,"enter the name"]}, 
    completed:{type:Boolean,
    default:false}
})

module.exports = mongoose.model('task',Schema)