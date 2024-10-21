const express = require('express')
require('dotenv').config()
// toh kya karna hai? 
// >>>>>add more webpages
// >>>>git karke web deploy kar
// uske baa
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello',(req,res) =>{
    res.send("Hello Abhay! this is my hello page")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
