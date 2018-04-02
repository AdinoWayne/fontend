const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')

const server = express()

server.set('port', process.env.PORT || 3030)
server.use(express.static('public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get("/product", (req, res) => {
  res.sendFile(__dirname + "/public/product.html")
})
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

server.listen(server.get('port'), (req, res) => {
  console.log("Server is running on port %s...", server.get('port'));
})