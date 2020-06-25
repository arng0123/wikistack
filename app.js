const express = require('express')
const app = express()
const morgan = require ('morgan')
app.use(morgan ('dev'))
// maybe need to change __dirname
const { static } = require('express');
app.use(express.static(__dirname + "/public/stylesheets"));

app.use(express.urlencoded({ extended: false }));

const {layout} = require('./views/index');

const { db } = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req,res, next) => {
  console.log('hello world')
  res.send(layout(''))
  next()
})

const port = 3000
app.listen(port, ()=>{
  //res.send('hi')
  console.log(`app listening in port ${port}`)
})
