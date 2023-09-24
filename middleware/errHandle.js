const {customError} = require('../error/customError')

const errHandle = (err,res,req,next) => {
    if(err instanceof customError){
        return req.status(err.status).json({msg:err.message})
    }
    req.status(500).send(err)
}

module.exports = errHandle