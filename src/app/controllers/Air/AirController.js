const Air = require("../../models/Air/Air");

class AirController {
  //[GET] /air/getAll
  async getAll(req, res) {
    try {
      const air = await Air.find({});
      res
        .status(200)
        .json({ success: true, message: "Get all air successfully", air });
      // console.log('Get all air successfully');
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  //[POST] /air/create
  async create(req, res) {
    try {
      const newAir = new Air(req.body);

      let newCode = await Air.findOne().sort({ _id: -1 }).limit(1);
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
      let subCode = "BGAIR" + year + month;
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
      newAir.code = code;
      console.log(newAir);
      await newAir.save();
      res
        .status(200)
        .json({
          success: true,
          message: "Create new air successfully",
          newAir,
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }

  //[POST] /air/update
  async update(req, res) {
    try {
      const updateAir = await Air.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res
        .status(200)
        .json({ success: true, message: "Update air successfully", updateAir });
      console.log("Update air successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Update failed" });
    }
  }

  //[GET] /air/search
  async search(req, res) {
    try {
      const { aol, aod, month, continent } = req.query;

      if (aol && month && continent) {
        const airs = await Air.find({
          $and: [{ aol: aol }, { month: month }, { continent: continent }],
        });
        return res
          .status(200)
          .json({ success: true, message: "Search air successfully", airs });
        console.log("Search air successfully");
      }
      if (aod && month && continent) {
        const airs = await Air.find({
          $and: [{ aod: aod }, { month: month }, { continent: continent }],
        });
        return res
          .status(200)
          .json({ success: true, message: "Search air successfully", airs });
        console.log("Search air successfully");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: "Search failed" });
    }
  }
}

module.exports = new AirController();
