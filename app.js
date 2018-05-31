'use strict'
 
const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
 
app.use(cors())
 
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: '5mb' }))

app.use(express.static('public'))
 
const server = http.createServer(app)
 
require('./routes')(app)

const port = process.env.PORT || 3000

server.listen(port, function () {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'))
});