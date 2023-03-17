const router = require("express").Router();
const {getUsers, getUserById, addNewUser, updateUser, deleteUser} = require("../../controller/userController");

router.route("/")
.get(getUsers)
.post(addNewUser);

router.route("/:userId")
.get(getUserById)
.delete(deleteUser)
.put(updateUser);

module.exports = router;
