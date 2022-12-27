// Using Node.js `require()`
const mongoose = require('mongoose')
// connect to mongodb
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://manhthekhoa1109:manhthekhoa1109@cluster0.ke0ztus.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('Mongoose Connection is successfully!!!')
  } catch (error) {
    console.log('Mongoose Connection is failure!!!')
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = { connect }
