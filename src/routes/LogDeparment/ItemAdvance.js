const express = require("express");
const router = express.Router();
const ItemAdvanceController = require("../../app/controllers/LogDeparment/ItemAdvanceController");

router.get("/get-all-by-id/:name", ItemAdvanceController.getAllByUserName);
router.post("/create", ItemAdvanceController.create);
router.post("/update/:_id", ItemAdvanceController.update);
router.get("/search", ItemAdvanceController.search);
router.get("/getAll", ItemAdvanceController.getAll);

module.exports = router;
