const express = require('express')
const wikiRouter = express.Router()
const addPage = require('../views/addPage')
const {Page} = require('../models')

wikiRouter.get('/', (req,res,next) => {
  res.redirect('/')
})

// submit a new page to the database
wikiRouter.post('/',  async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  })

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
  
}); 
  
  // res.send(req.body)


// retrieve the "add a page" form
wikiRouter.get('/add/',  (req, res, next) => {
   res.send(addPage())
})


module.exports = wikiRouter
