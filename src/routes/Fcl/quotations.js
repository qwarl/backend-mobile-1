const express = require("express");
const router = express.Router();
const quotationsController = require('../../app/controllers/Fcl/QuotationsController');

router.get('/getAll', quotationsController.getAll);
router.post('/create', quotationsController.create);
router.post('/update/:_id', quotationsController.update);
router.get('/search', quotationsController.search);

module.exports = router;