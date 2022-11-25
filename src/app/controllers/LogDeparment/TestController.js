const Test = require("../../models/LogDeparment/Test");

class TestController {
  //[GET] /Tests/getAll
  async getAll(req, res) {
    try {
      const test = await Test.find({});
      res.status(200).json({
        success: true,
        message: "Get all Test  successfully",
        test,
      });
      console.log("Get all Test successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  //[POST] /Tests/create
  async create(req, res) {
    try {
      var test = new Test({
        name: req.body.name,
        conditions: req.body.conditions,
        colors: req.body.colors,
      });
      await test.save();
      res.status(200).json({
        success: true,
        message: "Create new Test successfully",
        test,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }
}

module.exports = new TestController();
