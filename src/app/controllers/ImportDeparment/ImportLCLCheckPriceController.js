const ImportLCL = require("../../models/ImportDeparment/ImportLCLCheckPrice");

class ImportLCLCheckPriceController {
  //[GET] /ImportLCLs/getAll
  async getAll(req, res) {
    try {
      const checkPrice = await ImportLCL.find({});
      res
        .status(200)
        .json({
          success: true,
          message: "Get all ImportLCL successfully",
          checkPrice,
        });
      // console.log('Get all ImportLCL successfully');
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  //[POST] /ImportLCLs/create
  async create(req, res) {
    try {
      const newImportLCL = new ImportLCL(req.body);
      let newCode = await ImportLCL.findOne().sort({ _id: -1 }).limit(1);
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
      let subCode = "BGImportLCL" + year + month;
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
      newImportLCL.code = code;
      // console.log(newImportLCL);
      await newImportLCL.save();
      res
        .status(200)
        .json({
          success: true,
          message: "Create new ImportLCL successfully",
          newImportLCL,
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }

  //[POST] /ImportLCLs/update
  async update(req, res) {
    try {
      const updateImportLCL = await ImportLCL.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res
        .status(200)
        .json({
          success: true,
          message: "Update ImportLCL successfully",
          updateImportLCL,
        });
      console.log("Update ImportLCL successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Update failed" });
    }
  }

  async deleteLCL(req, res){
    try{
        const id = await ImportLCL.findByIdAndDelete(req.params._id);
        res
        .status(200)
        .json({
          success: true,
          message: "delete ImportLCL successfully",
          id,
        });
      console.log("delete ImportLCL successfully");
    }catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "delete failed" });
      }
  }

  //[GET] /ImportLCLs/search
  async search(req, res) {
    try {
      const { pol, pod, type, month, continent } = req.query;
      // console.log(pol, pod, type, month, continent);

      //code sua

      if (month && continent && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ month: month }, { continent: continent }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (month && continent && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ month: month }, { continent: continent }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (month && continent) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ month: month }, { continent: continent }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (month && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ month: month }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (continent && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ continent: continent }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }

      if (pol && pod && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ pol: pol }, { pod: pod }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (pol && pod) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ pol: pol }, { pod: pod }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (pol && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ pol: pol }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
      if (pod && type) {
        const ImportLCLs = await ImportLCL.find({
          $and: [{ pod: pod }, { type: type }],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      } else {
        const ImportLCLs = await ImportLCL.find({
          $or: [
            { pol: pol },
            { pod: pod },
            { type: type },
            { month: month },
            { continent: continent },
          ],
        });
        return res
          .status(200)
          .json({
            success: true,
            message: "Search ImportLCL successfully",
            ImportLCLs,
          });
        console.log("Search ImportLCL successfully");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: "Search failed" });
    }
  }
}

module.exports = new ImportLCLCheckPriceController();
