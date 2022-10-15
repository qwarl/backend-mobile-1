// Using Node.js `require()`
const mongoose = require("mongoose");
//connect to mongodb
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@backend-mobile.eg0izyo.mongodb.net/?retryWrites=true&w=majority', 
    // await mongoose.connect(
    //   "mongodb+srv://huuthang1107:huuthang1107@cluster0.owhj2c2.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongoose Connection is successfully!!!");
  } catch (error) {
    console.log("Mongoose Connection is failure!!!");
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = { connect };
