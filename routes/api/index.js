const router = require("express").Router();
const competitionsRoutes = require("./competitions");

// competitions routes match /api/competitions
router.use("/competitions", competitionsRoutes);

module.exports = router