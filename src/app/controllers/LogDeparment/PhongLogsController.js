/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-unreachable */
const PhongLog = require('../../models/LogDeparment/PhongLog');

class phongLogsController {
  // [GET] /phongLogs/getAll
  async getAll(req, res) {
    try {
      const phongLogs = await PhongLog.find({});
      res.status(200).json({
        success: true,
        message: 'Get all phong log successfully',
        phongLogs,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Get failed' });
    }
  }

  // [POST] /phongLogs/create
  async create(req, res) {
    try {
      const newPhongLog = new PhongLog(req.body);
      const newCode = await PhongLog.findOne().sort({ _id: -1 }).limit(1);
      // console.log(newCode.code);
      let counter;
      if (!newCode) {
        counter = 0;
      } else {
        counter = newCode.code.toString().slice(-3);
      }
      console.log((+counter + 1).toString().length);
      const getDate = new Date();
      let month = getDate.getMonth() + 1;
      month = month.toString().padStart(2, '0');
      const year = getDate.getFullYear().toString().slice(-2);
      const subCode = `BGLOG${year}${month}`;
      let code;
      let check = month;

      if ((check = month)) {
        counter++;
        // if(counter)
        const ait = counter.toString().padStart(3, '0'); // ati =auto increment code
        code = subCode + ait;
        // if ati>1000, it will become ati=001 again,
        // solve this by change padStart(3,'0') to padStart(4,'0')
      } else {
        check = month;
        counter = 0;
        counter++;
        const ati = number.toString().padStart(3, '0');
        code = subCode + ati;
      }
      console.log(code);
      newPhongLog.code = code;
      console.log(newPhongLog);
      await newPhongLog.save();
      res.status(200).json({
        success: true,
        message: 'Create new phongLog successfully',
        newPhongLog,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Create failed' });
    }
  }

  // [POST] /phongLogs/update
  async update(req, res) {
    try {
      const updatePhongLog = await PhongLog.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      );
      res.status(200).json({
        success: true,
        message: 'Update phong log successfully',
        updatePhongLog,
      });
      console.log('Update phong log successfully');
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Update failed' });
    }
  }

  // [GET] /phongLogs/search
  async search(req, res) {
    try {
      const { pol, pod, month, freight } = req.query;
      // console.log(pol, pod, type, month, continent);

      // code sua

      if (pol && month && freight) {
        const phongLogs = await PhongLog.find({
          $and: [{ pol }, { month }, { freight }],
        });
        return res.status(200).json({
          success: true,
          message: 'Search phong log successfully',
          phongLogs,
        });
        console.log('Search phong log successfully');
      }
      if (pod && month && freight) {
        const phongLogs = await PhongLog.find({
          $and: [{ pod }, { month }, { freight }],
        });
        return res.status(200).json({
          success: true,
          message: 'Search phong log successfully',
          phongLogs,
        });
        console.log('Search phong log successfully');
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: 'Search failed' });
    }
  }
}

module.exports = new phongLogsController();
