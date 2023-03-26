const { ObjectId } = require('mongoose').Types;
const { User} = require('../models');

function addNewFriend(req,res){
    console.log('You are adding a friend');
    console.log(req.body);

    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId} },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));

}

function deleteFriend(req,res){
    console.log("inside delete friend");
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId  } },
        { new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No User found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));

}

module.exports  = {addNewFriend, deleteFriend};