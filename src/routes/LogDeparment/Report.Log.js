/* eslint-disable camelcase */
const router = require('express').Router()
const report_log_controller = require('../../app/controllers/LogDeparment/Report.Logs.controller')

router.get('/getAll', report_log_controller.getAll) // report
router.get('/getById/:_id', report_log_controller.getById) // report id

router.post('/create', report_log_controller.create) // report

router.post('/add-sell-item-details', report_log_controller.addSellItemDetails)
router.post('/add-buy-item-details', report_log_controller.addBuyItemDetails)
router.post(
  '/add-paid-on-behalf-of-item-details',
  report_log_controller.addPaidOnItemDetails,
)
router.post('/add-advance-item-details', report_log_controller.addAdvanceOPS)

router.post(
  '/add-final-settlement-item-details',
  report_log_controller.addFinalSettlement,
)

router.put(
  '/update-sell-item-details/:_id',
  report_log_controller.updateSellItemDetails,
)
router.put(
  '/update-buy-item-details/:_id',
  report_log_controller.updateBuyItemDetails,
)
router.put(
  '/update-paid-on-item-details/:_id',
  report_log_controller.updatePaidOnItemDetails,
)
router.put(
  '/update-advance-item-details/:_id',
  report_log_controller.updateAdvaceOPSItemDetails,
)
router.put(
  '/update-final-settlement-item-details/:_id',
  report_log_controller.updateFinalSettlementItemDetails,
)
router.put(
  '/update-report-log-by-id/:_id',
  report_log_controller.updateReportById,
)

router.get(
  '/get-sell-item-details/:id',
  report_log_controller.getSellItemDetails,
)
router.get('/get-buy-item-details/:id', report_log_controller.getBuyItemDetails)
router.get(
  '/get-paid-on-item-details/:id',
  report_log_controller.getPaidOnItemDetails,
)
router.get(
  '/get-advance-item-details/:id',
  report_log_controller.getAdvanceOPSItemDetails,
)
router.get(
  '/get-final-settlement-item-details/:id',
  report_log_controller.getFinalSettlementItemDetails,
)

module.exports = router
