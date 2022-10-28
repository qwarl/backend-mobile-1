const express = require("express");
const router = express.Router();
const LogCheckPriceController = require("../../app/controllers/LogDeparment/BookingLogController");

router.get("/getAll", LogCheckPriceController.getAll);
router.post("/create", LogCheckPriceController.create);
router.post("/update/:_id", LogCheckPriceController.update);
router.get("/search", LogCheckPriceController.search);

module.exports = router;
