const wrapp = require('../middleware/wrapp')
const Task = require('../models/tasks')
let {customError1} = require('../error/customError');
const get = async (req,res) => {
    const resp = await Task.find({});
    res.status(200).send({resp})
}

const post = wrapp(async (req,res,next) => {
    if(!req.body.name){
        next(customError1("empty string", 401))
    }
    const response = await Task.create({"name":req.body.name})
    res.status(201).json({response})
})

const patch = wrapp(async (req,res) => {
    if(!req.body.name){
        next(customError1("empty string", 401))
    }
        const resp = await Task.updateOne({ _id: req.params.id }, { name: req.body.name },{runValidators:true,new:true});
        res.status(201).json({response})
})

const getid = wrapp(async (req,res) => {
    const resp = await Task.findOne({ _id: req.params.id }).exec();
    if(resp==null)
    return res.status(400).json({msg:"no such id"})
    res.status(200).send({resp:resp})
})

const deleteid = wrapp(async (req,res) => {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        res.status(200).json({task})
})

module.exports = {
    get, post, deleteid, getid, patch
}