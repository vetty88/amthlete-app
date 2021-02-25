const router = require("express").Router();
const bookRoutes = require("./competitions");

// Competition routes
router.use("/competitions", bookRoutes);

module.exports = router;
