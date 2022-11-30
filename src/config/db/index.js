// Using Node.js `require()`
const mongoose = require('mongoose');
// connect to mongodb
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@backend-mobile.eg0izyo.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('Mongoose Connection is successfully!!!');
  } catch (error) {
    console.log('Mongoose Connection is failure!!!');
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = { connect };
