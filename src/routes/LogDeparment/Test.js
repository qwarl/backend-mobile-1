const express = require("express");
const router = express.Router();
const TestController = require("../../app/controllers/LogDeparment/TestController");

router.post("/create", TestController.create);
router.get("/getAll", TestController.getAll);

module.exports = router;
