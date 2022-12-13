const Booking = require("../../models/LogDeparment/Booking");

class BookingLogController {
  // [GET] /Bookings/getAll
  async getAll(req, res) {
    try {
      const bookingLog = await Booking.find({});
      res.status(200).json({
        success: true,
        message: "Get all booking log successfully",
        bookingLog,
      });
      console.log("Get all booking log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Get failed" });
    }
  }

  //[POST] /Bookings/create
  async create(req, res) {
    try {
      const newBooking = new Booking(req.body);
      let newCode = await Booking.findOne().sort({ _id: -1 }).limit(1);
      // console.log(newCode.code);
      let counter;
      if (!newCode) {
        counter = 0;
      } else {
        counter = newCode.idfile.toString().slice(-3);
      }
      console.log((+counter + 1).toString().length);
      let getDate = new Date();
      let month = getDate.getMonth() + 1;
      month = month.toString().padStart(2, "0");
      let year = getDate.getFullYear().toString().slice(-2);
      let subCode = "FLHCM" + year + month;
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
      newBooking.idfile = code;
      console.log(newBooking);
      await newBooking.save();
      res.status(200).json({
        success: true,
        message: "Create new Booking successfully",
        newBooking,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Create failed" });
    }
  }

  //[POST] /Bookings/update
  async update(req, res) {
    try {
      const updateBooking = await Booking.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Update phong log successfully",
        updateBooking,
      });
      console.log("Update phong log successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: "Update failed" });
    }
  }

  //[GET] /Bookings/search
  async search(req, res) {
    try {
      const { pol, pod, month, freight } = req.query;
      // console.log(pol, pod, type, month, continent);

      //code sua

      if (pol && month && freight) {
        const Bookings = await Booking.find({
          $and: [{ pol: pol }, { month: month }, { freight: freight }],
        });
        return res.status(200).json({
          success: true,
          message: "Search phong log successfully",
          Bookings,
        });
        console.log("Search phong log successfully");
      }
      if (pod && month && freight) {
        const Bookings = await Booking.find({
          $and: [{ pod: pod }, { month: month }, { freight: freight }],
        });
        return res.status(200).json({
          success: true,
          message: "Search phong log successfully",
          Bookings,
        });
        console.log("Search phong log successfully");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: "Search failed" });
    }
  }
}

module.exports = new BookingLogController();
