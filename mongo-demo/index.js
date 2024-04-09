const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( result => console.log('Connected to MongoDB server.'))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type : Date,default : Date.now},
    isPublished : Boolean
})

const Course = mongoose.model('Courses', courseSchema)

async function saveCourses() {
    const course = new Course({
    name: 'Angular course',
    author: 'New Author 1',
    tags: ['Angular.js','Javascript'],
    isPublished: true
    })
    const result = await course.save()
    console.log(result)
}

async function getCourses() {
    const courses = await Course
        .find({isPublished : true})
        .limit(10)
        .sort({name : 1})
        .select({name: 0})
    console.log(courses)

}

getCourses()