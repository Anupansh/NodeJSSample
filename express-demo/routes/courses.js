const express = require('express')
const router = express.Router()
const Joi = require('joi')

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'},
]

router.get('/',(req,res) => {
    res.send(courses)
})

router.get('/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) { res.status(400).send('Course not found.')}
    res.send(course)
})

router.post('/',(req,res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const result = schema.validate(req.body)
    if (result.error) {
        res.status(404).send(result.error['details'][0]['message'])
    }
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(courses)
})

router.put('/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(c => c.id === id)
    if (!course) {res.status(400).send('Course not found')}
    else {
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        })
        const result = schema.validate(req.body)
        if (result.error) {
            res.status(404).send(result.error['details'][0]['message'])
        }
        else {
            course.name = req.body.name
            res.send(courses)
        }
    }
    console.log(courses)
})

router.delete('/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(c => c.id === id)
    if (!course) {res.status(400).send('Course not found')}
    else {
        let index = courses.indexOf(course)
        courses.splice(index,1)
        res.send(courses)
    }
})

module.exports = router