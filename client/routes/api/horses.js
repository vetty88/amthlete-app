const router = require("express").Router();
const horseController = require("../../controller/horseController");

// Matches with "/api/admin/horses"
router.route("/")
  .get(horseController.findAll)
  .post(horseController.create);

// Matches with "/api/admin/horses/:id"
router
  .route("/:id")
  .get(competitionController.findById)
  .put(competitionController.update)
  .delete(competitionController.remove);

module.exports = router;