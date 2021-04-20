const express = require('express')
const app = express()
const port = 3000
const Game = require('./src/game')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.set('views','./views')
app.set('view engine', 'ejs')

app.get('/', function(req,res) {
  res.render('pages/openingpage')})

app.post('/gamepage', function(req,res) {
  let game = new Game(req.body.one, req.body.two);
   res.render('pages/gamepage', {playerOne: req.body.one,  playerTwo: req.body.two, playerOneHealth: game.player1HP, playerTwoHealth: game.player2HP})})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})