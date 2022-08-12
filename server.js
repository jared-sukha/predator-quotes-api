const express = require('express')
const server = express()
const quotes = require('./quotes')

server.get('/quotes', (req, res) => {
  res.send(quotes[Math.floor(Math.random() * quotes.length)])
})

module.exports = server
