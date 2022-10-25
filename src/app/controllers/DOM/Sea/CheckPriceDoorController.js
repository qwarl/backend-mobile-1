const DomSeaDoor = require("../../../models/DOM/Sea/CheckPriceDoor");

class CheckPriceDoorController {
  //[GET] /SeaDoor/getAll
  async getAll(req, res) {
    try {
      const checkPriceDoor = await DomSeaDoor.find({});
      res.status(200).json({
        success: true,
        message: "Get all dom sea door successfully",
        checkPriceDoor,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  async deleteDoor(req, res) {
    try {
      const id = await DomSeaDoor.findByIdAndDelete(req.params._id);
      res.status(200).json({
        success: true,
        message: "delete Door successfully",
        id,
      });
      console.log("delete Door successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "delete failed" });
    }
  }

  //[POST] /SeaDoor/create
  async create(req, res) {
    try {
      const newSeaDoor = new DomSeaDoor(req.body);

      let newCode = await DomSeaDoor.findOne().sort({ _id: -1 }).limit(1);
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
      let subCode = "BGDOM" + year + month;
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
      newSeaDoor.code = code;
      console.log(newSeaDoor);
      await newSeaDoor.save();
      res.status(200).json({
        success: true,
        message: "Create new Sea Door successfully",
        newSeaDoor,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }

  //[POST] /SeaDoor/update
  async update(req, res) {
    try {
      const updateSeaDoor = await DomSeaDoor.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Update Sea Door successfully",
        updateSeaDoor,
      });
      console.log("Update truck successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Update failed" });
    }
  }

  //[GET] /air/search
  async search(req, res) {
    try {
      const { pol, pod, month, continent } = req.query;

      if (pol && month && continent) {
        const seaDoor = await DomSeaDoor.find({
          $and: [{ pol: pol }, { month: month }, { continent: continent }],
        });
        return res.status(200).json({
          success: true,
          message: "Search Sea Door successfully",
          seaDoor,
        });
        console.log("Search truck successfully");
      }
      if (pod && month && continent) {
        const seaDoor = await DomSeaDoor.find({
          $and: [{ pod: pod }, { month: month }, { continent: continent }],
        });
        return res.status(200).json({
          success: true,
          message: "Search Sea Door successfully",
          seaDoor,
        });
        console.log("Search truck successfully");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: "Search failed" });
    }
  }
}

module.exports = new CheckPriceDoorController();
