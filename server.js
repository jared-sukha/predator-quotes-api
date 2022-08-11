const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('hey hey')
})

module.exports = server
