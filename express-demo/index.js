const Joi = require('joi')
const express = require('express')
const logger = require('./logger')
const courses = require('./routes/courses')
var app = express()

app.use(express.json())

app.use(logger)
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
app.use('/courses/link',courses)

app.get('/', (req, res) => {
    res.send('Hello World! Message displayed from base URL!')
})

const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`Listening to port ${port}`)
})