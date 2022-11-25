const express = require("express");
const router = express.Router();
const AdvanceOPSController = require("../../app/controllers/LogDeparment/AdvanceOPSController");

router.get("/get-all-by-id/:name", AdvanceOPSController.getAllByUserName);
router.post("/create", AdvanceOPSController.create);
router.post("/update/:_id", AdvanceOPSController.update);
router.get("/search", AdvanceOPSController.search);
router.get("/getAll", AdvanceOPSController.getAll);

module.exports = router;
