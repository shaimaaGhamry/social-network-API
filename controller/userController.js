const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

function getUsers(req, res){
    console.log("Inside get Users");

    User.find()
    .then((users) =>{
        res.json(users);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}
function getUserById(req,res){
    User.findById(req.params.userId)
    .populate("thoughts")
    .populate("friends")
    .then (user => {
        !user
        ? res.status(404).json({message: "No suf user found with this ID"})
        : res.status(200).json(user);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}
function addNewUser(req, res){
    console.log("Inside Add new user");

    User.create(req.body)
    .then(student => {
        res.json(student);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}

function deleteUser(req, res){
    User.findOneAndRemove({_id:req.params.userId})
    .then( user => {
        !user
        ? res.status(404).json({message: "No such user is existing"})
        : Thought.deleteMany({ _id: { $in: user.thoughts } })
        .then( thoughts =>{
            !thoughts
            ? res.status(404).json({message: "The user is deleted successfully \n No such thoughts associated with that user"})
            : res.status(200).json({message: "User and thoughts are deleted successfully"})
        });
    })    
    .catch((err) => {
        res.status(500).json(err);
    });
}

function updateUser(req,res){
    
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        res.status(500).json(err);
        console.log(err);
      }
 );
  

}
module.exports = {getUsers, addNewUser, deleteUser, getUserById, updateUser};
