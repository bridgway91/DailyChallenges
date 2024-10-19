// You must finish the Pong class. It has a constructor which accepts the maximum score a player can get throughout the game, and a method called play. This method determines whether the current player hit the ball or not, i.e. if the paddle is at the sufficient height to hit it back. There're 4 possible outcomes: player successfully hits the ball back, player misses the ball, player misses the ball and his opponent reaches the maximum score winning the game, either player tries to hit a ball despite the game being over. You can see the input and output description in detail below.

// "Play" method input:
// ball position - The Y coordinate of the ball
// player position - The Y coordinate of the centre(!) of the current player's paddle

// "Play" method output:
// One of the following strings:
// "Player X has hit the ball!" - If the ball "hits" the paddle
// "Player X has missed the ball!" - If the ball is above/below the paddle
// "Player X has won the game!" - If one of the players has reached the maximum score
// "Game Over!" - If the game has ended when the play method is called

// Important notes:
// Players take turns hitting the ball, always starting the game with the Player 1.
// The paddles are 7 pixels in height.
// The ball is 1 pixel in height.

// Example
// let game = new Pong(2); // Here we say that the score to win is 2
// game.play(50, 53)  -> "Player 1 has hit the ball!";     // Player 1 hits the ball
// game.play(100, 97) -> "Player 2 has hit the ball!";     // Player 2 hits it back
// game.play(0, 4)    -> "Player 1 has missed the ball!";  // Player 1 misses so Player 2 gains a point
// game.play(25, 25)  -> "Player 2 has hit the ball!";     // Player 2 hits the ball
// game.play(75, 25)  -> "Player 2 has won the game!";     // Player 1 misses again. Having 2 points Player 2 wins, so we return the corresponding string
// game.play(50, 50)  -> "Game Over!";                     // Another turn is made even though the game is already over


class Pong { // dear god this was a mess... seemed straight forward enough until i realized how pong works -_-, players dont score points off hitting the ball, but when the other player misses! duh! also dont like all the nested if-statements... stupid headache
    constructor(maxScore) {
      this.maxScore = maxScore;
      this.p1 = 0;
      this.p2 = 0;
      this.turn = true;
      this.game = true;
    }
    
    play(ballPos, playerPos) {
      console.log(`(to:${this.maxScore},p1:${this.p1},p2:${this.p2}) ${ballPos} ${playerPos}`)
      if (!this.game) return 'Game Over!'
      if (this.game) {
        if (ballPos >= playerPos-3 && ballPos <= playerPos+3) {
          this.turn = !this.turn
          return this.turn ? 'Player 2 has hit the ball!' : 'Player 1 has hit the ball!'
        } else {
          this.turn ? this.p2++ : this.p1++
          this.turn = !this.turn
          if (this.p1 == this.maxScore) {
            this.game = false
            return 'Player 1 has won the game!'
          } else if (this.p2 == this.maxScore) {
            this.game = false
            return 'Player 2 has won the game!'
          } else {
            return this.turn ? 'Player 2 has missed the ball!' : 'Player 1 has missed the ball!'
          }
        }
      }
    }
  }

// alternatively...


class Pong { // much cleaner than mine... T_T
    constructor(maxScore) {
      this.maxScore = maxScore;
      this.turn = 0;
      this.scores = {
        1: 0,
        2: 0
      },
      this.gameOver = false
    }
    
    play(ballPos, playerPos) {
    
      this.turn = this.turn % 2 + 1;
    
      if(this.gameOver){
        return 'Game Over!';
      }
      
      if(Math.abs(playerPos - ballPos) <= 3.5){
        return `Player ${this.turn} has hit the ball!`;
      } else {
        this.scores[this.turn] += 1;
        
        if(this.scores[this.turn] == this.maxScore){
          this.gameOver = true;
          return `Player ${this.turn % 2 + 1} has won the game!`;
        }  
        return `Player ${this.turn} has missed the ball!`;
      }  
    }
  }