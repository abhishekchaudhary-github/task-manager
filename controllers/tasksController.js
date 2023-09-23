const Task = require('../models/tasks')
const get = async (req,res) => {
    const resp = await Task.find({});
    res.status(200).send({resp})
}

const post = async (req,res) => {
    try 
    {const response = await Task.create({"name":req.params.name})
    res.status(201).json({response})
}
catch(err) {
    res.status(500).send(err.errors.name.message)
}
}

const patch = async (req,res) => {
    try{
        const resp = await Task.updateOne({ _id: req.params.id }, { name: req.body.name },{runValidators:true,new:true});}
    catch(err) {
        res.status(500).send(err.errors.name.message)
    }
    
}

const getid = async (req,res) => {
    try {
    const resp = await Task.findOne({ _id: req.params.id }).exec();
    if(resp==null)
    return res.status(400).json({msg:"no such id"})
    res.status(200).send({resp:resp})
    }catch(err){
        res.status(500).send(err)
    }

}

const deleteid = async (req,res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        res.status(200).json({task})
    }
    catch(err){
        res.status(404).json({err})
    }
}

module.exports = {
    get, post, deleteid, getid, patch
}