const express = require('express')
const router = express.Router()
const domSeaCyController = require('../../app/controllers/DOM/DomSeaCYController')

router.get('/getAll', domSeaCyController.getAll);
router.post('/create', domSeaCyController.create);
router.post('/update/:_id', domSeaCyController.update);
router.get('/search', domSeaCyController.search);

module.exports = router