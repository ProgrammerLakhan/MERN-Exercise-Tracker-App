const router = require('express').Router();
let User = require('../models/user.model');

//router for geting all users
router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.status(200).json(users))
    .catch(err=> res.status(400).json('Error:'+err))
});

//router for adding a new user
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
    .then(()=> res.status(200).json('User added'))
    .catch(err=> res.status(400).json('Error:'+err));
});

//router for getting a perticular user by id
router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error:'+err));
});

//router for deleting a perticular user
router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=> res.status(200).json('User deleted!'))
    .catch(err => res.status(400).json('Error:'+err));
});

//router for updating a perticular uses's data
router.route('/update/:id').post((req,res)=>{

    User.findById(req.params.id)
    .then((User)=>{
        User.username = req.body.username;

        User.save()
        .then(()=> res.status(200).json('User updated!'))
        .catch(err => res.status(400).json('Error:'+err));
    })
});

module.exports = router;