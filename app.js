const express = require('express')
const app = express()
const morgan = require ('morgan')
app.use(morgan ('dev'))
// maybe need to change __dirname
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

const views = require('./views/index')

app.get('/', (req,res) => {
  console.log('hello world')
})

let port = 3000
app.listen(port, ()=>{
  console.log(`app listening in port ${port}`)
})
