const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:String, completed:Boolean
})

module.exports = mongoose.model('task',Schema)