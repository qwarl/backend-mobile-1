const ItemAdvance = require('../../models/LogDeparment/ItemAdvance')

class ItemAdvanceLogController {
  //[GET] /ItemAdvances/getAll
  async getAll(req, res) {
    try {
      const itemAdvance = await ItemAdvance.find({})
      res.status(200).json({
        success: true,
        message: 'Get all itemAdvance  successfully',
        itemAdvance,
      })
      console.log('Get all itemAdvance successfully')
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'Get failed' })
    }
  }

  async getAllByUserName(req, res) {
    try {
      const itemAdvance = await ItemAdvance.find({
        userCreate: req.params.name,
      })
      res.status(200).json({
        success: true,
        message: 'Get all ItemAdvance log successfully',
        itemAdvance,
      })
      // console.log("Get all ItemAdvance log successfully");
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'Get failed' })
    }
  }
  async deleteItemAdvance(req, res) {
    try {
      const id = await ItemAdvance.findByIdAndDelete(req.params._id)
      res.status(200).json({
        success: true,
        message: 'delete item advance successfully',
        id,
      })
      // console.log('delete item advance successfully')
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'delete failed' })
    }
  }
  //[POST] /ItemAdvances/create
  async create(req, res) {
    try {
      const newItemAdvance = new ItemAdvance(req.body)
      //   let newCode = await ItemAdvance.findOne().sort({ _id: -1 }).limit(1);
      //   // console.log(newCode.code);
      //   let counter;
      //   if (!newCode) {
      //     counter = 0;
      //   } else {
      //     counter = newCode.idfile.toString().slice(-3);
      //   }
      //   console.log((+counter + 1).toString().length);
      //   let getDate = new Date();
      //   let month = getDate.getMonth() + 1;
      //   month = month.toString().padStart(2, "0");
      //   let year = getDate.getFullYear().toString().slice(-2);
      //   let subCode = "FLHCM" + year + month;
      //   var code;
      //   let check = month;

      //   if ((check = month)) {
      //     counter++;
      //     // if(counter)
      //     let ait = counter.toString().padStart(3, "0"); // ati =auto increment code
      //     code = subCode + ait; // if ati>1000, it will become ati=001 again, solve this by change padStart(3,'0') to padStart(4,'0')
      //   } else {
      //     check = month;
      //     counter = 0;
      //     counter++;
      //     let ati = number.toString().padStart(3, "0");
      //     code = subCode + ati;
      //   }
      //   console.log(code);
      //   newItemAdvance.idfile = code;
      //   console.log(newItemAdvance);
      await newItemAdvance.save()
      res.status(200).json({
        success: true,
        message: 'Create new ItemAdvance successfully',
        newItemAdvance,
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'Create failed' })
    }
  }

  //[POST] /ItemAdvances/update
  async update(req, res) {
    try {
      const updateItemAdvance = await ItemAdvance.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      )
      res.status(200).json({
        success: true,
        message: 'Update phong log successfully',
        updateItemAdvance,
      })
      console.log('Update phong log successfully')
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'Update failed' })
    }
  }

  //[GET] /ItemAdvances/search
  async search(req, res) {
    try {
      const { pol, pod, month, freight } = req.query
      // console.log(pol, pod, type, month, continent);

      //code sua

      if (pol && month && freight) {
        const ItemAdvances = await ItemAdvance.find({
          $and: [{ pol: pol }, { month: month }, { freight: freight }],
        })
        return res.status(200).json({
          success: true,
          message: 'Search phong log successfully',
          ItemAdvances,
        })
        console.log('Search phong log successfully')
      }
      if (pod && month && freight) {
        const ItemAdvances = await ItemAdvance.find({
          $and: [{ pod: pod }, { month: month }, { freight: freight }],
        })
        return res.status(200).json({
          success: true,
          message: 'Search phong log successfully',
          ItemAdvances,
        })
        console.log('Search phong log successfully')
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ success: false, message: 'Search failed' })
    }
  }
}

module.exports = new ItemAdvanceLogController()
