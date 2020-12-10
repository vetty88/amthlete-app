const router = require("express").Router();
const competitionsController = require("../../controllers/competitionsController");

// Matches with "/competitions"
router.route("/")
  .get(competitionsController.findAll)
  .post(competitionsController.create);

// Matches with "/competitions/:id"
router
  .route("/:id")
  .get(competitionsController.findById)
  .put(competitionsController.update)
  .delete(competitionsController.remove);

module.exports = router;
