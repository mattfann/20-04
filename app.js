const express = require('express')
const app = express()
const port = 3000
const Game = require('./src/game')
let game = new Game()


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.set('views','./views')
app.set('view engine', 'ejs')

app.get('/', function(req,res) {
  res.render('pages/openingpage')})

app.post('/gamepage', function(req,res) {
  game.p1 = req.body.one;
  game.p2 = req.body.two;
   res.render('pages/gamepage', {playerOne: req.body.one,  playerTwo: req.body.two, playerOneHealth: game.player1HP, playerTwoHealth: game.player2HP})})

app.post('/attack1', function(req,res) {
    game.attackOne();
    if(game.player1HP && game.player2HP > 0) {
      res.render('pages/attack1', {playerOne: game.p1,  playerTwo: game.p2, playerOneHealth: game.player1HP, playerTwoHealth: game.player2HP})   
    } else {
     res.render('pages/end2', {playerOne: game.p1,  playerTwo: game.p2, playerOneHealth: game.player1HP, playerTwoHealth: game.player2HP})}})
    
app.post('/attack2', function(req,res) {
    game.attackTwo();
    if(game.player1HP && game.player2HP > 0) {
      res.render('pages/attack2', {playerOne: game.p1,  playerTwo: game.p2, playerOneHealth: game.player1HP, playerTwoHealth: game.player2HP})
    } else {
      res.render('pages/end1', {playerOne: game.p1,  playerTwo: game.p2, playerOneHealth: game.player1HP, playerTwoHealth: game.player2HP})}}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})