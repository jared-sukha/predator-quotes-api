const express = require('express')
const server = express()
const quotes = require('./quotes')

server.get('/quotes', (req, res) => {
  res.send(quotes[Math.floor(Math.random() * quotes.length)])
})

server.get('/quotes/all', (req, res) => {
  res.send(quotes)
})

server.get('/quotes/bycharacter/:id', (req, res) => {
  const charId = req.params.id.toLowerCase()
  const charQuotes = quotes.filter((c) => c.character.toLowerCase() == charId)
  res.send(charQuotes)
})

module.exports = server
