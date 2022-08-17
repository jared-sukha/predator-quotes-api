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
  const uniqueChars = quotes
    .map((x) => x.character)
    .filter((x, index, a) => a.indexOf(x) === index)
  res.send(
    charQuotes == 0
      ? `Sorry we only have some quotes for the following characters ${uniqueChars}`
      : charQuotes
  )
})

module.exports = server
