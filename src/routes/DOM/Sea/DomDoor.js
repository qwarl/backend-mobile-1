const express = require('express')
const router = express.Router()
const domSeaDoorController = require('../../../app/controllers/DOM/Sea/DomSeaDoorController')

router.get('/getAll', domSeaDoorController.getAll);
router.post('/create', domSeaDoorController.create);
router.post('/update/:_id', domSeaDoorController.update);
router.get('/search', domSeaDoorController.search);

module.exports = router