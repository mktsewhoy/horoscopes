const path = require('path')
const express = require('express')

const server = express()
//const horoscopes = require('./routes/horoscopes')
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
