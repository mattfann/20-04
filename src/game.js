class Game{
    constructor(){
        this.p1 = 'player1 name';
        this.p2 = 'player2 name';
        this.player1HP = 100;
        this.player2HP = 100;
    }
    attackOne(){
        this.player1HP -= 10;
    }
    attackTwo() {
        this.player2HP -= 10;
    }
    
}

module.exports = Game