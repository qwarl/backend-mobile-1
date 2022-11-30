const router = require('express').Router();
const LogCheckPriceController = require('../../app/controllers/LogDeparment/LogCheckPriceController');

router.get('/getAll', LogCheckPriceController.getAll);
router.post('/create', LogCheckPriceController.create);
router.post('/update/:_id', LogCheckPriceController.update);
router.get('/search', LogCheckPriceController.search);
router.delete('/delete/:_id', LogCheckPriceController.deleteLog);

module.exports = router;
