const {ObjectId} = require("mongoose");
const { Thought } = require("../models");

function addReactions(req, res){
    console.log("Inside Add Reaction");

    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addToSet:{reactions: req.body}},
        { new: true}
    )
    .then(thought =>{
        !thought
        ? res.status(404).json("The thought of these reations are not found")
        : res.status(200).json(thought)
    })
    .catch(err => res.status(500).json(err));
}


function deleteReaction(req, res){
    console.log("Inside delete reaction");
    Thought.findByIdAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: {_id: req.params.reactionId}}},
        {runValidators: true, new: true}
    )
    .then(thought =>{
        !thought
        ? res.status(404).json("The thought of these reations are not found")
        : res.status(200).json(thought)
    })
    .catch(err => res.status(500).json(err))
}
module.exports = {addReactions, deleteReaction};