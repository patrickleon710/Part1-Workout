const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

const workoutRoutes = require('./routes/workouts')

//middleware
app.use(express.json())

app.use('/', (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connecting to db

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & server is listening on port', process.env.PORT)
        })  
    })
    .catch((error) => {
        console.log(error)
    })

