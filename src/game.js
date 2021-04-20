class Game{
    constructor(player1,player2){
        this.player1 = player1;
        this.player1 = player2;
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