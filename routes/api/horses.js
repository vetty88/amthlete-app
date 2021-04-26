const router = require("express").Router();
const horseController = require("../../controllers/horseController");

// Matches with "/api/admin/horses"
router.route("/")
  .get(horseController.findAll)
  .post(horseController.create);

// Matches with "/api/admin/horses/:uniqueName"
router
  .route("/:uniqueName")
  .get(horseController.findByUniqueName)
  .put(horseController.update)
  .delete(horseController.remove);

module.exports = router;