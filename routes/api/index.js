const router = require("express").Router();
const competitionRoutes = require("./competitions");

// Competition routes
router.use("/competitions", competitionRoutes);

module.exports = router;
