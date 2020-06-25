const express = require('express')
const app = express()
const morgan = require ('morgan')
app.use(morgan ('dev'))
// maybe need to change __dirname
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded())
