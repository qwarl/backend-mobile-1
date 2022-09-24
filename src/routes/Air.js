const express = require('express')
const router = express.Router()
const airController = require('../app/controllers/AirController')

router.get('/getAll', airController.getAll);
router.post('/create', airController.create);
router.post('/update/:_id', airController.update);
router.get('/search', airController.search);

module.exports = router