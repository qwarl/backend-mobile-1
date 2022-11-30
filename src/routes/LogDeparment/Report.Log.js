/* eslint-disable camelcase */
const router = require('express').Router();
const report_log_controller = require('../../app/controllers/LogDeparment/Report.Logs.controller');

router.get('/getAll', report_log_controller.getAll);
router.post('/create', report_log_controller.create);
router.get('/getById/:_id', report_log_controller.getById); // info
router.post('/add-sell-item-details', report_log_controller.addSellItemDetails);
router.post('/update-sell-item-details/:_id', report_log_controller.updateSellItemDetails);
// router.post('/update-buy', report_log_controller.updateBuy)

module.exports = router;
