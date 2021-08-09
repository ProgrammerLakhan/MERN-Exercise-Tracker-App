const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//router for getting list of all exercises
router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises => res.status(200).json(exercises))
    .catch(err=> res.status(400).json('Error:'+err))
});

//router for adding a new exercise
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    newExercise.save()
    .then(()=> res.status(200).json('Exercise added!'))
    .catch(err=> res.status(400).json('Error:'+err));
});

//router for getting a perticular exercise
router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=> res.status(200).json(exercise))
    .catch(err=>res.status(400).json('Error:'+err));
});

//router for deleting a perticular exercise
router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.status(200).json('Exercise deleted'))
    .catch(err=>res.status(400).json('Error:'+err));
});

//router for updating a perticular exercise
router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then((Exercise)=>{
        Exercise.username = req.body.username;
        Exercise.description = req.body.description;
        Exercise.duration = req.body.duration;
        Exercise.date = req.body.date;

        Exercise.save()
        .then(()=> res.status(200).json('Exercise updated!'))
        .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err=>res.status(400).json('Error:'+err));
});

module.exports = router;