// Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

// Task
// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

// The Board [image of board]

// Rules
// 1.  There are two players and both start off the board on square 0.
// 2.  Player 1 starts and alternates with player 2.
// 3.  You follow the numbers up the board in order 1=>100
// 4.  If the value of both die are the same then that player will have another go.
// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)
// 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

// Returns
// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.
// Return Game over! if a player has won and another player tries to play.
// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.


class SnakesLadders { // relatively easy, just a lot of typing
    constructor() {
      // board has 101 elements (to include starting at square 0), p1+p2 is index for each player's square
      this.board = [0,1,38,3,4,5,6,14,31,9,10,       // 0-10
                      11,12,13,14,26,6,17,18,19,20,   //11-20
                      42,22,23,24,25,26,27,84,29,30,  //21-30
                      31,32,33,34,35,44,37,38,39,40,  //31-40
                      41,42,43,44,45,25,47,48,11,50,  //41-50
                      67,52,53,54,55,56,57,58,59,60,  //51-60
                      61,19,63,60,65,66,67,68,69,70,  //61-70
                      91,72,73,53,75,76,77,98,79,80,  //71-80
                      81,82,83,84,85,86,94,88,68,90,  //81-90
                      91,88,93,94,75,96,97,98,80,100] //91-100
  
      this.player = 0 // 0/1 boolean, 0=player1, 1=player2
      this.p1 = 0
      this.p2 = 0
      this.game = 1 // game active, =0 after a player wins
    }
    play(die1, die2) {
      if(!this.game) return 'Game over!'
      // get new position
      let total = die1 + die2
      if(!this.player) { // if player 1
        this.p1 += total
        if(this.p1 > 100) this.p1 = 100 - (this.p1 - 100)
        this.p1 = this.board[this.p1]
      } else { // if player 2
        this.p2 += total
        if(this.p2 > 100) this.p2 = 100 - (this.p2 - 100)
        this.p2 = this.board[this.p2]
      }
      // check win
      if(this.p1 == 100) {this.game=0;return 'Player 1 Wins!'}
      if(this.p2 == 100) {this.game=0;return 'Player 2 Wins!'}
      // going again? + output
      if(die1 == die2) {
        return `${this.player ? 'Player 2' : 'Player 1'} is on square ${this.player ? this.p2 : this.p1}`
      } else {
        this.player = !this.player
        return `${this.player ? 'Player 1' : 'Player 2'} is on square ${this.player ? this.p1 : this.p2}`
      }
    }
  }

// or

function SnakesLadders() { // slightly better version of mine, tho really all solns go through roughly the same steps, and even this could maybe be improved by just combining snakes+ladders attributes
    this.snakes = {16:6,46:25,49:11,62:19,64:60,74:53,89:68,92:88,95:75,99:80};
    this.ladders = {2:38,7:14,8:31,15:26,21:42,28:84,36:44,51:67,71:91,78:98,87:94};
    this.playerPlaces = {1:0,2:0};
    this.currentPlayer = 1;
    this.gameOver = false;
  };
SnakesLadders.prototype.play = function(die1, die2) {
    //detect playing after game over
    if (this.gameOver) return "Game over!";
    
    //calculate normal move
    this.playerPlaces[this.currentPlayer] += die1+die2;
    
    //check win condition
    if (this.playerPlaces[this.currentPlayer] == 100) {
      this.gameOver = true;
      return "Player "+ this.currentPlayer +" Wins!";
    } else if (this.playerPlaces[this.currentPlayer] > 100) 
      //handle bounce-back
      this.playerPlaces[this.currentPlayer] = 100 - (this.playerPlaces[this.currentPlayer] - 100);
    
    //handle landing on a snake
    if (this.snakes[this.playerPlaces[this.currentPlayer]]) this.playerPlaces[this.currentPlayer] = this.snakes[this.playerPlaces[this.currentPlayer]];
    
    //handle landing on a ladder
    if (this.ladders[this.playerPlaces[this.currentPlayer]]) this.playerPlaces[this.currentPlayer] = this.ladders[this.playerPlaces[this.currentPlayer]];
  
    var result = "Player "+this.currentPlayer+" is on square "+this.playerPlaces[this.currentPlayer];
    
    //change players only if the two dice are different
    if (die1 !== die2) this.currentPlayer = this.currentPlayer == 1? 2 : 1;
    
    return result;
  }