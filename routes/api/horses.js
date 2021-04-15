const router = require("express").Router();
const horsesController = require("../../controllers/horsesController");

// Matches with "/api/horses"
router.route("/")
  .get(horsesController.findAll)
  .post(horsesController.create);

// Matches with "/api/horses/:uniqueName"
router
  .route("/:uniqueName")
  .get(horsesController.findByUniqueName)
  .put(horsesController.update)
  .delete(horsesController.remove);

module.exports = router;