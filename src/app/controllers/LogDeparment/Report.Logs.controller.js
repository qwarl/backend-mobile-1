const Report = require('../../models/LogDeparment/Report.Log')
const Sell = require('../../models/LogDeparment/Sell')
const BuyItemLog = require('../../models/LogDeparment/Buy.Log')
const PaidOn = require('../../models/LogDeparment/Paid.On.Behalf.Of.Log')

module.exports = {
  // [GET] api/report-log/getAll
  // get all report log
  getAll: async (req, res) => {
    try {
      const reportLogs = await Report.find()
        .populate('info')
        .populate('sellReport')
        .populate('buyReport')
      res.status(200).json({
        success: true,
        // message: "Get report log successfully",
        reportLogs,
      })
      console.log('Get report log successfully')
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'Get failed' })
    }
  },

  // [POST] api/report-log/create
  // create new report
  create: async (req, res) => {
    try {
      const { idInfo } = req.body

      const report = new Report(req.body) // gan _id vao info xu ly ben fe nha
      report.info = idInfo
      await report.save()
      res.status(200).json({
        success: true,
        report,
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: error })
    }
  },

  // [GET] api/report-log/getById/:_id
  getById: async (req, res) => {
    try {
      const report = await Report.findOne({ _id: req.params._id })
        .populate('info')
        .populate('sellReport')
        .populate('buyReport')
        .populate('paidOnBehalfOfReport')
      // sell
      // const sumTotal = report[0].sellReport.reduce((a, b) => a + b.total, 0)
      const sumSellTotal = report.sellReport.reduce((a, b) => a + b.total, 0)
      // calculate sum of array
      const sumSellTotalActualPayment = report.sellReport.reduce(
        (a, b) => a + b.actualPayment,
        0,
      )
      // calculate sum of array
      const sumSellToVND = report.sellReport.reduce(
        (a, b) => a + b.approximatelyToVnd,
        0,
      )
      report.totalSell = sumSellTotal
      report.totalSellVAT = sumSellTotalActualPayment
      report.totalSellVND = sumSellToVND
      // buy
      const sumBuyTotal = report.buyReport.reduce((a, b) => a + b.total, 0)
      const sumBuyTotalVAT = report.buyReport.reduce(
        (a, b) => a + b.actualPayment,
        0,
      )
      report.totalBuy = sumBuyTotal
      report.totalBuyVAT = sumBuyTotalVAT
      // chi ho
      const sumPaidOnBehalfOfReport = report.paidOnBehalfOfReport.reduce(
        (a, b) => a + b.price,
        0,
      )
      report.totalPaidOnBehalfOf = sumPaidOnBehalfOfReport
      // profit VND
      const profitVND = sumSellToVND - sumBuyTotalVAT
      report.profitVND = profitVND
      // profit USD
      const profitUSD = profitVND / report.exchangeRate
      report.profitUSD = profitUSD
      console.log('report', report)
      await report.save()
      res.status(200).json({
        success: true,
        report,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
      console.log(error)
    }
  },

  // [PUT] api/report-log/update-sell-item-details/:id
  updateSellItemDetails: async (req, res) => {
    try {
      const sellItemUpdate = await Sell.findOneAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      )
      res.status(200).json({
        success: true,
        sellItemUpdate,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
      console.log(error)
    }
  },

  // [POST] api/report-log/add-sell-item-details
  addSellItemDetails: async (req, res) => {
    // add sell item details directly to report log
    // try {
    //   const { sellItemDetails, idReportLog } = req.body;
    //   const report = await Report.findOne(
    //     { _id: idReportLog },

    //   );
    //   if (report) {
    //     report.sellReport.push(sellItemDetails);
    //     await report.save();
    //     res.status(200).json({
    //       success: true,
    //       report,
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    //   res.status(400).json({ success: false, message: error });
    // }

    // add sell item details to another collection
    try {
      const { sellItemDetails, idReportLog } = req.body

      const sellItem = new Sell(sellItemDetails)
      await sellItem.save()

      const report = await Report.findOne({ _id: idReportLog })
      if (report) {
        report.sellReport.push(sellItem._id)
        await report.save()

        // await report.save()
        // console.log('report', report)
        res.status(200).json({
          success: true,
          report,
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: error })
    }
  },

  // ----------------------------------------------------------
  // [POST] api/report-log/add-buy-item-details
  addBuyItemDetails: async (req, res) => {
    // add sell item details directly to report log
    // try {
    //   const { sellItemDetails, idReportLog } = req.body;
    //   const report = await Report.findOne(
    //     { _id: idReportLog },

    //   );
    //   if (report) {
    //     report.sellReport.push(sellItemDetails);
    //     await report.save();
    //     res.status(200).json({
    //       success: true,
    //       report,
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    //   res.status(400).json({ success: false, message: error });
    // }

    // add sell item details to another collection
    try {
      const { buyItemDetails, idReportLog } = req.body

      const buyItem = new BuyItemLog(buyItemDetails)
      await buyItem.save()

      const report = await Report.findOne({ _id: idReportLog })
      if (report) {
        report.buyReport.push(buyItem._id)
        await report.save()

        // await report.save()
        console.log('report', report)
        res.status(200).json({
          success: true,
          report,
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: error })
    }
  },

  // ----------------------------------------------------------
  // [POST] api/report-log/add-paid-one-behafl-of-item-details
  addPaidOnItemDetails: async (req, res) => {
    // add paid on behalf of (chi hộ) item details to another collection
    // try {
    //   const { paidOnItemDetails, idReportLog } = req.body

    //   const paidOnItem = new BuyItemLog(paidOnItemDetails)
    //   await paidOnItem.save()

    //   const report = await Report.findOne({ _id: idReportLog })
    //   if (report) {
    //     report.paidOnBehalfOfReport.push(paidOnItem._id)
    //     await report.save()

    //     // await report.save()
    //     console.log('report', report)
    //     res.status(200).json({
    //       success: true,
    //       report,
    //     })
    //   }
    // } catch (error) {
    //   console.log(error)
    //   res.status(400).json({ success: false, message: error })
    // }

    try {
      const { paidOnItemDetails, idReportLog } = req.body

      const paidOnItem = new PaidOn(paidOnItemDetails)
      await paidOnItem.save()

      const report = await Report.findOne({ _id: idReportLog })
      if (report) {
        report.paidOnBehalfOfReport.push(paidOnItem._id)
        await report.save()

        // await report.save()
        console.log('report', report)
        res.status(200).json({
          success: true,
          report,
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: error })
    }
  },
}
