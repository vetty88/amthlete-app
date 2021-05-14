const router = require("express").Router();
const competitionController = require("../../controller/competitionController");
// const userID = req.user.id

// Matches with "/api/admin/competitions"
router.route("/")
  .get(competitionController.findAll)
  .post(competitionController.create);

// Matches with "/api/admin/competitions/:id"
router
  .route("/:id")
  .get(competitionController.findById)
  .put(competitionController.update)
  .delete(competitionController.remove);

router
  .route("competitions/:user")
  .get(competitionController.findById)
  .put(competitionController.update)
  .delete(competitionController.remove);


module.exports = router;