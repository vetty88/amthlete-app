const router = require("express").Router();
const competitionRoutes = require("./competitions");
const horseRoutes = require("./horses");
const userRoutes = require("./users");

// Competition routes
router.use("/competitions", competitionRoutes);
router.use("/horses", horseRoutes);
router.use("/users", userRoutes);

module.exports = router;
