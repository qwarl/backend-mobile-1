const express = require("express");
const router = express.Router();
const domTruckController = require("../../app/controllers/DOM/CheckPriceTruckController");

router.get("/getAll", domTruckController.getAll);
router.post("/create", domTruckController.create);
router.post("/update/:_id", domTruckController.update);
router.get("/search", domTruckController.search);
router.delete("/delete/:_id", domTruckController.deleteTruck);

module.exports = router;
