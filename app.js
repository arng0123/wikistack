const express = require('express')
const app = express()
const morgan = require ('morgan')
app.use(morgan ('dev'))

const { static } = require('express');
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(express.urlencoded({ extended: false }));

const {layout} = require('./views/index');

const { db } = require('./models');
db.authenticate().then(() => {
  console.log('connected to the database');
})

const userRouter = require('./routes/user')
const wikiRouter = require ('./routes/wiki')
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)



app.get('/', (req,res, next) => {
  console.log('hello world')
  res.send(layout(''))
  next()
})

const port = 3000
const init = async () => {
  await db.sync()
  // db.sync({force: true})
  app.listen(port, ()=>{
    console.log(`app listening in port ${port}`)
  })
}
init()

