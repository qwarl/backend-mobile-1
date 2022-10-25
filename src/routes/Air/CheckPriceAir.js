const express = require("express");
const router = express.Router();
const airController = require("../../app/controllers/Air/CheckPriceAirController");

router.get("/getAll", airController.getAll);
router.post("/create", airController.create);
router.post("/update/:_id", airController.update);
router.get("/search", airController.search);
router.delete("/delete/:_id", airController.deleteAir);

module.exports = router;
