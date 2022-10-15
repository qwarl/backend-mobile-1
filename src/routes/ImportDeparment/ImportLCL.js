const express = require("express");
const router = express.Router();
const importLCLController = require("../../app/controllers/ImportDeparment/ImportLCLController");

router.get("/getAll", importLCLController.getAll);
router.post("/create", importLCLController.create);
router.post("/update/:_id", importLCLController.update);
router.get("/search", importLCLController.search);

module.exports = router;
