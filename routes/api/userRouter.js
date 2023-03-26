const router = require("express").Router();
const {getUsers, getUserById, addNewUser, updateUser, deleteUser} = require("../../controller/userController");
const {addNewFriend, deleteFriend} = require("../../controller/friendController");


router.route("/")
.get(getUsers)
.post(addNewUser);

router.route("/:userId")
.get(getUserById)
.delete(deleteUser)
.put(updateUser);

router.route("/:userId/friends/:friendId")
.post(addNewFriend)
.delete(deleteFriend);

module.exports = router;
