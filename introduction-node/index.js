//pemanggilan package express
const express = require('express')
//menggunakan package express
const app = express()

//request = client menuju server
//respons = server menuju client
app.get('/', function (req, res) {
  res.send('Hello World')
})

//port adalah sebuah jalur
const port = 5000
app.listen(port,function(){
    console.log(`Server running on port : ${port}`);
})