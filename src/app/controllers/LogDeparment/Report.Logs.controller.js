const Report = require('../../models/LogDeparment/Report.Log');
const Sell = require('../../models/Shared/Sell');

module.exports = {
  // [GET] api/report-log/getAll
  getAll: async (req, res) => {
    try {
      const reportLogs = await Report.findOneAndUpdate();
      res.status(200).json({
        success: true,
        // message: "Get report log successfully",
        reportLogs,
      });
      console.log('Get report log successfully');
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Get failed' });
    }
  },

  // [POST] api/report-log/create
  create: async (req, res) => {
    try {
      const report = new Report(req.body); // gan _id vao info xu ly ben fe nha
      await report.save();
      res.status(200).json({
        success: true,
        report,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error });
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
      const { sellItemDetails, idReportLog } = req.body;

      const sellItem = new Sell(sellItemDetails);
      await sellItem.save();

      const report = await Report.findOne({ _id: idReportLog });
      if (report) {
        report.sellReport.push(sellItem._id);
        await report.save();
        res.status(200).json({
          success: true,
          report,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error });
    }
  },

  // [GET] api/report-log/getById/:info
  getById: async (req, res) => {
    try {
      const report = await Report.find({ _id: req.params._id })
        .populate('info')
        .populate('sellReport');
      res.status(200).json({
        success: true,
        report,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  },

  // [PUT] api/report-log/update-sell-item-details/:id
  updateSellItemDetails: async (req, res) => {
    try {
      const updateReport = await Report.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      );
      res.status(200).json({
        success: true,
        message: 'Update report log successfully',
        updateReport,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error });
    }
  },
};
