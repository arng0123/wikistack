const express = require('express')
const wikiRouter = express.Router()
const addPage = require('../views/addPage')

// retrieve all wiki pages
wikiRouter.get('/', (req,res,next) => {
  res.redirect('/')
})

// submit a new page to the database
wikiRouter.post('/', (req, res, next) => {

})

// retrieve the "add a page" form
wikiRouter.get('/add/', (req, res, next) => {
  res.send(addPage())
})


module.exports = wikiRouter
