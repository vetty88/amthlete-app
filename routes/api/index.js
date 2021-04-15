const router = require("express").Router();
const competitionRoutes = require("./competitions");
const horseRoutes = require("./horses");

// Competition routes
router.use("/competitions", competitionRoutes);
router.use("/horses", horseRoutes);

module.exports = router;
