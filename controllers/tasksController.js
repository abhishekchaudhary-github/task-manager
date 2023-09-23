const Task = require('../models/tasks')
const get = async (req,res) => {
    res.send('hi')
}

const post = async (req,res) => {
    console.log(req.body)
    const response = await Task.create({"name":"car","completed":true,"popo":"jojo"})
    res.status(201).json({response})
}

const patch = (req,res) => {
    res.send('hi')
}

const getid = (req,res) => {
    res.send('hi')
}

const deleteid = (req,res) => {
    res.send('hi')
}

module.exports = {
    get, post, deleteid, getid, patch
}