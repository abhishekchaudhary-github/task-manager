const mongoose = require('mongoose')

// mongoose.connect(connectstring, {
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true
// }).then(()=>console.log('CONNECTED')).catch((err)=>console.log(err))

const mongoconnec = (url) =>{
    return mongoose.connect(url, {
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        })
}

module.exports = {
    mongoconnec
}