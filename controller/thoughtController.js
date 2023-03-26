const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

function getAllThoughts(req, res){
    Thought.find()
    .then( thought => res.status(200).json(thought))
    .catch(err => {
        res.status(500).json(err);
        console.log(err);
    });
}


function getThoughtById(req, res){
    Thought.findById(req.params.thoughtId)
    .then( thought => {
        !thought
        ? res.status(404).json({message: "No such thought found with that ID"})
        : res.status(200).json(thought)
    } )
    .catch(err => res.status(500).json(err))
}

function addThought(req, res){
    Thought.create(req.body)
    .then(thought =>{
        User.findByIdAndUpdate(
            { _id: req.body.userId},
            {$addToSet: {thoughts: thought._id}},
            {new: true}
        ).then(user => {
            !user
            ? res.status(404).json({message: "No User found witht that ID"})
            : res.status(200).json({message: "Thought has been added successfuly and has been add to the associated user"})
        })       
    })
    .catch(err => res.status(500).json(err))
}

function updateThoughtById(req, res){
    Thought.findByIdAndUpdate(
        {_id:req.params.thoughtId},
        {$set: req.body},
        {runValidators:  true, new: true})
    .then(thought => {
        !thought
        ? res.status(404).json({ message: 'No Thought with this id!' })
        : res.status(200).json(thought)
    })
    .catch(err => res.status(500).json(err))
}

function deleteThought(req, res){
    console.log("Inside delete thought");
    Thought.findByIdAndDelete({_id: req.params.thoughtId})
    .then(thought => {
        !thought
          ? res.status(404).json({ message: 'No Thought with this id!' })
          : User.findOneAndUpdate(
            {thoughts:req.params.thoughtId},
            {$pull: {thoughts: thought._id}},
            {new: true}
          )
          .then( user => {
            !user
            ? res.status(404).json({message: "the associated user of that thought is not found"})
            : res.status(200).json({message: "the thought has been deleted and the associated user thoughts have been removed as well"})
          })
    })
    .catch(err => res.status(500).json(err))
}

module.exports = { addThought, getAllThoughts, getThoughtById, deleteThought, updateThoughtById};
