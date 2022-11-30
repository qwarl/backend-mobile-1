/* eslint-disable no-console */
const Sell = require('../../models/Shared/Sell');

module.exports = {
  // [GET] /api/sell/getAll
  getAll: async (req, res) => {
    try {
      const sells = await Sell.find();
      res.status(200).json({
        success: true,
        sells,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error });
    }
  },

  // [POST] /api/sell/create
  create: async (req, res) => {
    try {
      const sell = new Sell(req.body);
      await sell.save();
      res.status(200).json({
        success: true,
        sell,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  },

  // [GET] /api/sell/getById/:idFile
  getById: async (req, res) => {
    try {
      const sell = await Sell.find({ info: req.params.info }).populate('info');
      res.status(200).json({
        success: true,
        sell,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  },

  // [POST] /api/sell/updateById/:info
  updateById: async (req, res) => {
    try {
      const sell = await Sell.updateMany({ info: req.params.info }).populate('info');
      res.status(200).json({
        success: true,
        sell,
        // message: 'Update successfully'
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
      console.log(error);
    }
  },

};
