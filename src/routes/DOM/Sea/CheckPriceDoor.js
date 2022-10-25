const express = require("express");
const router = express.Router();
const domSeaDoorController = require("../../../app/controllers/DOM/Sea/CheckPriceDoorController");

router.get("/getAll", domSeaDoorController.getAll);
router.post("/create", domSeaDoorController.create);
router.post("/update/:_id", domSeaDoorController.update);
router.get("/search", domSeaDoorController.search);
router.delete("/delete/:_id", domSeaDoorController.deleteDoor);

module.exports = router;
