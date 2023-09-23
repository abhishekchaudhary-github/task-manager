require('dotenv').config()
const {mongoconnec} = require('./db/connect')
const tasks = require('./tasks/tasks')
const express = require('express')
const app = express();
const url = process.env.mongo_uri

app.use(express.json());
app.use('/api/tasks/v1',tasks)
const fn=async()=>{
    await mongoconnec(url)
    app.listen(8080,()=>{console.log('server up')})
}

fn()