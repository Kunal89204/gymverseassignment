const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv")

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

module.exports = app;