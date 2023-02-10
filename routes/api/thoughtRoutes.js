const router = require("express").Router();
const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");


router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;