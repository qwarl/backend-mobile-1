const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const dotenv = require('dotenv')

dotenv.config()

//cors config
// var cors = require('cors')
// app.use(cors())

require('dotenv').config({ path: __dirname + '/.env' }) // maybe not work
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const route = require('./routes/index')

route(app)

//CONNECT MONGODB
const db = require('./config/db/index')
// Database connection
db.connect()

app.listen(PORT, () => {
  console.log(`Server listening at http://192.168.1.69:${PORT}/api`)
  console.log('PORT:', PORT)
})
