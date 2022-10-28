const express = require("express");
const router = express.Router();
const quotationsController = require("../../app/controllers/Fcl/CheckPriceFCLController");

router.get("/getAll", quotationsController.getAll);
router.post("/create", quotationsController.create);
router.post("/update/:_id", quotationsController.update);
router.get("/search", quotationsController.search);
router.delete("/delete/:_id", quotationsController.deleteFCL);

module.exports = router;
