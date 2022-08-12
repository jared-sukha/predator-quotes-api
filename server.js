const express = require('express')
const server = express()

server.get('/quotes', (req, res) => {
  res.send('hey hey')
})

module.exports = server
