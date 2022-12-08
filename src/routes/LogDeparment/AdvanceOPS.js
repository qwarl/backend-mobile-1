const express = require("express");
const router = express.Router();
const AdvanceOPSController = require("../../app/controllers/LogDeparment/AdvanceOPSController");

router.get("/get-all-by-name", AdvanceOPSController.getAllByUserName);
router.get("/getAll", AdvanceOPSController.getAll);
router.get("/getAllOPS/:key", AdvanceOPSController.getAllOPS);
router.post("/create", AdvanceOPSController.create);
router.post("/update/:_id", AdvanceOPSController.update);
router.get("/search", AdvanceOPSController.search);
// router.delete("/delete/:_id", AdvanceOPSController.de);

module.exports = router;
