// Your task is to write a simple class called Game that checks how many times a hippo has to leap into the centre of the arena to collect some food. You will be given an integer array called board that defines where all the food can be found. You have to return an integer for the amount of leaps a hippo has to do to eat all of the food.

// Rules
// 1.  The board array contains 0’s for spaces and 1’s for food
// 2.  The board is n x n in size, where n is between 5 and 50.
// 3.  One leap consists of food items that are either horizontally or vertically connected to each other. If they are not connected, then another leap is needed.

// Returns
// Return an integer for the amount of leaps needed to collect all of the food.

// Example
// Initialise
// board = [[1,1,0,0,0],
//          [1,1,0,0,0],
//          [0,0,0,0,0],
//          [0,0,0,1,1],
//          [0,0,0,1,1]]
// game = new Game(board)
// game.play()
// Result
// There are 2 blocks of food connected horizontally or vertically so you must return 2.

// Good luck and enjoy!


function Game(board){ // so a little long, but worked first try! go me! ... also the task doesnt really seem to actually match the game...
    this.board = board
    this.play = function() {
      const eat = (x,y)=> {
        if(!inBounds(x,y) || this.board[x][y]==0) { return }
        else {
          this.board[x][y] = 0
          eat(x-1,y)
          eat(x+1,y)
          eat(x,y-1)
          eat(x,y+1)
        }
      }
      const inBounds = (x,y)=> {
        let l = this.board.length
        return (x>=0 && x<l && y>=0 && y<l)
      }
      let count = 0
      for (let i=0; i<this.board.length; i++) {
        for (let j=0; j<this.board.length; j++) {
          if(this.board[i][j]==1) {
            count++
            eat(i,j)
          }
        }
      }
      return count
    }
  }
  