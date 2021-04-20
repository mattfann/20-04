const express = require('express')
const app = express()
const port = 3000
const Game = require('./src/game')

app.set('views','./views')
app.set('view engine', 'ejs')

app.get('/', function(req,res) {
  res.render('pages/openingpage')})

app.post('/gamepage', function(req,res) {
    console.log(req.body)
    res.render('pages/gamepage')})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})