const PhongLog = require("../../models/LogDeparment/PhongLog");

class phongLogsController {
  //[GET] /phongLogs/getAll
  async getAll(req, res) {
    try {
      const phongLogs = await PhongLog.find({});
      res
        .status(200)
        .json({
          success: true,
          message: "Get all phong log successfully",
          phongLogs,
        });
      console.log("Get all phong log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  //[POST] /phongLogs/create
  async create(req, res) {
    try {
      const newPhongLog = new PhongLog(req.body);
      let newCode = await PhongLog.findOne().sort({ _id: -1 }).limit(1);
      // console.log(newCode.code);
      let counter;
      if (!newCode) {
        counter = 0;
      } else {
        counter = newCode.code.toString().slice(-3);
      }
      console.log((+counter + 1).toString().length);
      let getDate = new Date();
      let month = getDate.getMonth() + 1;
      month = month.toString().padStart(2, "0");
      let year = getDate.getFullYear().toString().slice(-2);
      let subCode = "BGLOG" + year + month;
      var code;
      let check = month;

      if ((check = month)) {
        counter++;
        // if(counter)
        let ait = counter.toString().padStart(3, "0"); // ati =auto increment code
        code = subCode + ait; // if ati>1000, it will become ati=001 again, solve this by change padStart(3,'0') to padStart(4,'0')
      } else {
        check = month;
        counter = 0;
        counter++;
        let ati = number.toString().padStart(3, "0");
        code = subCode + ati;
      }
      console.log(code);
      newPhongLog.code = code;
      console.log(newPhongLog);
      await newPhongLog.save();
      res
        .status(200)
        .json({
          success: true,
          message: "Create new phongLog successfully",
          newPhongLog,
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }

  //[POST] /phongLogs/update
  async update(req, res) {
    try {
      const updatePhongLog = await PhongLog.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res
        .status(200)
        .json({
          success: true,
          message: "Update phong log successfully",
          updatePhongLog,
        });
      console.log("Update phong log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Update failed" });
    }
  }

  //[GET] /phongLogs/search
  async search(req, res) {
    try {
      const { pol, pod, month, freight } = req.query;
      // console.log(pol, pod, type, month, continent);

      //code sua

      if (pol && month && freight) {
        const phongLogs = await PhongLog.find({
          $and: [{ pol: pol }, { month: month }, { freight: freight }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search phong log successfully",
            phongLogs,
          });
        console.log("Search phong log successfully");
      }
      if (pod && month && freight) {
        const phongLogs = await PhongLog.find({
          $and: [{ pod: pod }, { month: month }, { freight: freight }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search phong log successfully",
            phongLogs,
          });
        console.log("Search phong log successfully");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: "Search failed" });
    }
  }
}

module.exports = new phongLogsController();
