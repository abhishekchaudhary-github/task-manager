const errHandle = (err,res,req,next) => {
    req.status(500).send(err)
}

module.exports = errHandle