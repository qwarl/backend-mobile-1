const express = require("express");
const router = express.Router();
const importController = require("../../app/controllers/ImportDeparment/ImportCheckPriceController");

router.get("/getAll", importController.getAll);
router.post("/create", importController.create);
router.post("/update/:_id", importController.update);
router.get("/search", importController.search);
router.delete("/delete/:_id", importController.deleteImport);

module.exports = router;
