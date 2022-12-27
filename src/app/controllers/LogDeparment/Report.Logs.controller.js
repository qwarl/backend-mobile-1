const Report = require('../../models/LogDeparment/Report.Log')
const Sell = require('../../models/LogDeparment/Sell')
const BuyItemLog = require('../../models/LogDeparment/Buy.Log')
const PaidOn = require('../../models/LogDeparment/Paid.On.Behalf.Of.Log')
const ItemAdvance = require('../../models/LogDeparment/ItemAdvance')

module.exports = {
  // [GET] api/report-log/getAll
  // get all report log
  getAll: async (req, res) => {
    try {
      const reportLogs = await Report.find()
        .populate('info')
        .populate('sellReport')
        .populate('buyReport')
        .populate('advanceOPS')
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
        id: report._id,
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: error })
    }
  },

  // get report by id
  // [GET] api/report-log/getById/:_id
  getById: async (req, res) => {
    try {
      const report = await Report.findOne({ _id: req.params._id })
        .populate('info')
        .populate('sellReport')
        .populate('buyReport')
        .populate('paidOnBehalfOfReport')

      // 22/12/2022
      // sell
      // truoc thue
      // tong tien totalVND (totalVND chi la quantity*unitPrice)
      const totalSellVND = report.sellReport.reduce((a, b) => a + b.totalVND, 0)
      // tong tien totalUSD (totalUSD chi la quantity*unitPrice)
      const totalSellUSD = report.sellReport.reduce((a, b) => a + b.totalUSD, 0)
      // tong tien totalEUR (totalEUR chi la quantity*unitPrice)
      // const totalEUR = report.sellReport.reduce((a, b) => a + b.totalEUR, 0)
      // list sell item of report and if currency ='USD', cal sum of changeToVND
      let changeSellToVND = 0
      report.sellReport.forEach((item) => {
        if (item.currency === 'USD') {
          changeSellToVND += item.changeToVND
        }
      })
      let changeSellVATToVND = 0
      report.sellReport.forEach((item) => {
        if (item.currency === 'USD') {
          changeSellVATToVND += item.changeToVNDVAT
        }
      })
      // total sell (totalVND+totalUSD(changeToVND)) chua VAT
      const totalSell = totalSellVND + changeSellToVND

      // sau thue
      // tong tien actualPaymentVND (totalVND sau VAT)
      const actualPaymentSellVND = Math.round(
        report.sellReport.reduce((a, b) => a + b.actualPaymentVND, 0),
      )
      // tong tien actualPaymentUSD (totalUSD sau VAT)
      const actualPaymentSellUSD = Math.round(
        report.sellReport.reduce((a, b) => a + b.actualPaymentUSD, 0),
      )

      // tong thanh tien (chi tinh VND, ko quy doi gi ca)
      const approximatelySellToVnd = Math.round(
        report.sellReport.reduce((a, b) => a + b.approximatelyToVnd, 0),
      )
      // total sell (actualPaymentVND+actualPaymentUSD(VND))
      const totalSellVAT = actualPaymentSellVND + changeSellVATToVND
      // buy
      // truoc thue
      // tong tien tung don vi truoc thue (quy doi ra VND luon)
      const totalBuyVND = report.buyReport.reduce((a, b) => a + b.totalVND, 0)
      const totalBuyUSDAndEURToVND = report.buyReport.reduce(
        (a, b) => a + b.changeToVND,
        0,
      )
      // const totalBuyEUR = report.buyReport.reduce((a, b) => a + b.totalEUR, 0)
      // tong tien tat ca loai phi chuaw VAT (quy ra VND)
      const totalBuy = totalBuyUSDAndEURToVND + totalBuyVND
      // sau thue
      // tong tien tung don vi sau thue (quy ra VND)
      const actualPaymentBuyVND = report.buyReport.reduce(
        (a, b) => a + b.actualPaymentVND,
        0,
      )
      const totalBuyUSDAndEURToVNDVAT = report.buyReport.reduce(
        (a, b) => a + b.changeToVNDVAT,
        0,
      )
      // total buy vat
      const totalBuyVAT = actualPaymentBuyVND + totalBuyUSDAndEURToVNDVAT

      // total paidon (chi ho)
      // const totalPaidOn=report.PaidOn.reduce(
      //   (a, b) => a + b.price,
      //   0,
      // )
      const totalPaidOn = report.paidOnBehalfOfReport.reduce(
        (a, b) => a + b.price,
        0,
      )
      // loi nhuan truoc VAT
      const profit = totalSell - totalBuy

      // loi nhuan sau VAT
      const profitVAT = totalSellVAT - totalBuyVAT
      //
      res.status(200).json({
        success: true,
        report,
        totalSellVND,
        totalSell,
        totalSellVAT,
        totalSellUSD,
        changeSellVATToVND,
        changeSellToVND,
        actualPaymentSellVND,
        actualPaymentSellUSD,
        approximatelySellToVnd,

        totalBuy,
        totalBuyVAT,

        profit,
        profitVAT,

        totalPaidOn,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
      console.log(error)
    }
  },

  // [PUT] api/report-log/update-sell-item-details/:id
  updateSellItemDetails: async (req, res) => {
    try {
      const sellItemUpdate = await Sell.findByIdAndUpdate(
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

  // [PUT] api/report-log/update-buy-item-details/:id
  updateBuyItemDetails: async (req, res) => {
    try {
      const buyItemUpdate = await BuyItemLog.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      )
      res.status(200).json({
        success: true,
        buyItemUpdate,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
    }
  },

  // [PUT] api/report-log/update-paid-on-item-details/:id
  updatePaidOnItemDetails: async (req, res) => {
    try {
      const paidOnItemUpdate = await PaidOn.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      )
      res.status(200).json({
        success: true,
        paidOnItemUpdate,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
    }
  },

  updateAdvaceOPSItemDetails: async (req, res) => {
    try {
      const advanceOPSItemUpdate = await ItemAdvance.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      )
      res.status(200).json({
        success: true,
        advanceOPSItemUpdate,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
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

  addAdvanceOPS: async (req, res) => {
    try {
      const { advanceOPSItemDetail, idReportLog } = req.body

      const advanceOPS = new ItemAdvance(advanceOPSItemDetail)
      await advanceOPS.save()

      const report = await Report.findOne({ _id: idReportLog })
      if (report) {
        report.advanceOps.push(advanceOPS._id)
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

  // [PUT] /update-report-log-by-id/:_id (update report log by id)
  updateReportById: async (req, res) => {
    try {
      const report = await Report.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      })
      res.status(200).json({
        success: true,
        report,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
      console.log(error)
    }
  },

  // [GET] /get-sell-item-details/:id
  getSellItemDetails: async (req, res) => {
    try {
      const sellItemDetails = await Sell.findOneAndUpdate({
        _id: req.params._id,
      })
      res.status(200).json({
        success: true,
        sellItemDetails,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
      console.log(error)
    }
  },

  // [GET] /get-buy-item-details/:id
  getBuyItemDetails: async (req, res) => {
    try {
      const buyItemDetails = await BuyItemLog.findOneAndUpdate({
        _id: req.params._id,
      })
      res.status(200).json({
        success: true,
        buyItemDetails,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
    }
  },

  // [GET] /get-paid-on-item-details/:id
  getPaidOnItemDetails: async (req, res) => {
    try {
      const paidOnItemDetails = await PaidOn.findOneAndUpdate({
        _id: req.params._id,
      })
      res.status(200).json({
        success: true,
        paidOnItemDetails,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
    }
  },
  // [GET] /get-paid-on-item-details/:id
  getAdvanceOPSItemDetails: async (req, res) => {
    try {
      const advanceOPSItemDetails = await ItemAdvance.findOneAndUpdate({
        _id: req.params._id,
      })
      res.status(200).json({
        success: true,
        advanceOPSItemDetails,
      })
    } catch (error) {
      res.status(400).json({ success: false, message: error })
    }
  },
}
