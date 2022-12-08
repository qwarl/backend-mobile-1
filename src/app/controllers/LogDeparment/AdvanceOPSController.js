const AdvanceOPS = require("../../models/LogDeparment/AdvanceOPS");

class AdvanceOPSController {
  //[GET] /AdvanceOPSs/getAll
  async getAll(req, res) {
    try {
      const OPS = await AdvanceOPS.find({});
      // console.log(OPS.length);
      // for (let i = 0; i < OPS.length; i++) {
      //   const advanceOPS = OPS[i].ops;
      //   // console.log("Hien Thị" + advanceOPS);
      // }
      const advanceOPS = OPS[0].ops;
      res.status(200).json({
        success: true,
        message: "Get all AdvanceOPS  successfully",
        advanceOPS,
      });
      // console.log("Get all AdvanceOPS successfully");
      // console.log(JSON.stringify(advanceOPS));
      // console.log(advanceOPS);
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  async getAllByUserName(req, res) {
    try {
      const AdvanceOPS = await AdvanceOPS.find({
        userCreate: "Mr Thắng",
      });
      res.status(200).json({
        success: true,
        message: "Get all AdvanceOPS log successfully",
        AdvanceOPS,
      });
      console.log("Get all AdvanceOPS log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  async getAllOPS(req, res) {
    try {
      const AdvanceOPS = await AdvanceOPS.find({ money: req.params.key });
      res.status(200).json({
        success: true,
        message: "Get all AdvanceOPS log successfully",
        AdvanceOPS,
      });
      console.log("Get all AdvanceOPS log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  //[POST] /AdvanceOPSs/create
  async create(req, res) {
    try {
      const newAdvanceOPS = new AdvanceOPS({
        ops: req.body.ops,
        userUpdate: req.body.userUpdate,
        userCreate: req.body.userCreate,
        creacteAt: req.body.creacteAt,
        updateAt: req.body.updateAt,
      });
      await newAdvanceOPS.save();
      res.status(200).json({
        success: true,
        message: "Create new AdvanceOPS successfully",
        newAdvanceOPS,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }

  //[POST] /AdvanceOPSs/update
  async update(req, res) {
    try {
      const updateAdvanceOPS = await AdvanceOPS.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Update phong log successfully",
        updateAdvanceOPS,
      });
      console.log("Update phong log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Update failed" });
    }
  }

  //[GET] /AdvanceOPSs/search
  async search(req, res) {
    try {
      const { pol, pod, month, freight } = req.query;
      // console.log(pol, pod, type, month, continent);

      //code sua

      if (pol && month && freight) {
        const AdvanceOPSs = await AdvanceOPS.find({
          $and: [{ pol: pol }, { month: month }, { freight: freight }],
        });
        return res.status(200).json({
          success: true,
          message: "Search phong log successfully",
          AdvanceOPSs,
        });
        console.log("Search phong log successfully");
      }
      if (pod && month && freight) {
        const AdvanceOPSs = await AdvanceOPS.find({
          $and: [{ pod: pod }, { month: month }, { freight: freight }],
        });
        return res.status(200).json({
          success: true,
          message: "Search phong log successfully",
          AdvanceOPSs,
        });
        console.log("Search phong log successfully");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: "Search failed" });
    }
  }
}

module.exports = new AdvanceOPSController();
