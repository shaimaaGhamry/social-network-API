const router = require("express").Router();

const { addReactions, deleteReaction } = require("../../controller/reactionController");
const {addThought, getAllThoughts, getThoughtById, deleteThought, updateThoughtById} = require("../../controller/thoughtController");

router.route("/")
.get(getAllThoughts)
.post(addThought);

router.route("/:thoughtId")
.put(updateThoughtById)
.get(getThoughtById)
.delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReactions);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
