/*eslint-disable new-cap */
/*eslint-disable max-len */
const Joi = require('joi');  
const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name:"Physics"},
    {id: 2, name:"Mechanics"},
    {id: 3, name:"Engineering"},
];

router.get('/', (req, res) => {
    res.send(courses);
});

//eslint-disable-next-line consistent-return
router.post('/', (req, res) => {
    const {error} = validateCourse(req.body);
    if(error){
        return res.status(404).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }; 
    courses.push(course);
    res.send(course);
});

//eslint-disable-next-line consistent-return
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        return res.status(404).send('the course was not found');
    }
    res.send(course);
});

//eslint-disable-next-line consistent-return
router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        return res.status(404).send('the course was not found');
        
    }

    const {error} = validateCourse(req.body);
    if(error){
        return res.status(404).send(error.details[0].message);
    }

    course.name = req.body.name;
    res.send(course);

});

router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course with the given id was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

const validateCourse = (course) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

module.exports = router;