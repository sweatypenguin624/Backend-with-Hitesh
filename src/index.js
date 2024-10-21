const express = require('express')
require('dotenv').config()
// toh kya karna hai? 
// >>>>>add more webpages
// >>>>git karke web deploy kar
// uske baa
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(<h1>'Hello World!</h1>')
})

app.get('/hello',(req,res) =>{
    res.send("Hello Abhay! this is my hello page")
})
app.get('/bye',(req,res) =>{
  res.send("Hello Abhay! this is my bye bye  page")
})

app.get('/wyd',(req,res) =>{
  res.send("Hello Abhay! or fir? kya plans aaj?")
})
app.get('/hi',(req,res) =>{
  res.send("Hello Abhay! keep calm")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
