const express = require('express')
const router = express.Router()
const lclController = require('../../app/controllers/Air/LCLController')

router.get('/getAll', lclController.getAll);
router.post('/create', lclController.create);
router.post('/update/:_id', lclController.update);
router.get('/search', lclController.search);

module.exports = router