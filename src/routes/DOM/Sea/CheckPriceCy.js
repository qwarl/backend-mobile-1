const express = require("express");
const router = express.Router();
const domSeaCyController = require("../../../app/controllers/DOM/Sea/CheckPriceCYController");

router.get("/getAll", domSeaCyController.getAll);
router.post("/create", domSeaCyController.create);
router.post("/update/:_id", domSeaCyController.update);
router.get("/search", domSeaCyController.search);
router.delete("/delete/:_id", domSeaCyController.deleteCY);

module.exports = router;
