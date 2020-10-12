const router = require("express").Router();
const competitionsController = require("../../controllers/competitionsController");

// Matches with "/api/competitions"
                                  router
.route("/")
.get((req, res )=> {console.log("Inside route");})
   .get(competitionsController.findAll)
  .post(competitionsController.create);

// Matches with "/api/competitions/:id"
router
  .route("/:id")
  .get(competitionsController.findById)
  .put(competitionsController.update)
  .delete(competitionsController.remove);

module.exports = router;