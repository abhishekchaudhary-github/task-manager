require('dotenv').config()
const {mongoconnec} = require('./db/connect')
const tasks = require('./tasks/tasks')
const express = require('express')
const app = express();
const url = process.env.mongo_uri
const notFound = require('./middleware/notFound')
const errHandle = require('./middleware/errHandle')

app.use(express.json());
app.use('/api/tasks/v1',tasks)
app.use(notFound)
app.use(errHandle)
const fn=async()=>{
    await mongoconnec(url)
    app.listen(8080,()=>{console.log('server up')})
}

fn()