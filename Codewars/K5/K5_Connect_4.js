// The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.
// Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

// Rules
// If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.
// If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.
// If the game has been won by a player, any following moves should return ”Game has finished!”.
// Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
// Player 1 starts the game every time and alternates with player 2.
// The columns are numbered 0-6 left to right.

// Good luck and enjoy!


class Connect4 { // mine, NOT DONE, DOES NOT WORK, WAS TAKING TOO LONG SO WENT TO OTHER SOLNS
    constructor() {
      this.board = [ // board turned 90deg
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
      ]
      this.gameActive = true
      this.p1turn = true
    }
    play(i) {
      if(!this.gameActive) { return 'Game has finished!' }
      if(this.board[i][5]>0) { return 'Column full!' }
      // add disc to correct spot
      let j=0, num = this.p1turn ? 1 : 2
      while(this.board[i][j] > 0) { j++ }
      this.board[i][j] = num
      // check for win
      const col = +i, row = +j // start point (where disc was dropped)
      let count = 1
        // check horizontal                                     // was giving me problems starting here, not entirely sure why, conceptually its understandable
      while(this.board[i][j--] == num) { count++ }
      j = row
      while(this.board[i][j++] == num) { count++ }
      j = row
      if(count>=4) { this.gameActive = false; return `${this.p1turn ? 'Player 1' : 'Player 2'} wins!`}
      count = 1
        // check vertical
      console.log(this.board)
      i--
      while(i >= 0) {
        if(this.board[i][j] == num) { count++ }
        i--
      }
      i = col+1
      while(i <= 5) {
        if(this.board[i][j] == num) { count++ }
        i++
      }
      i = col
      if(count>=4) { this.gameActive = false; return `${this.p1turn ? 'Player 1' : 'Player 2'} wins!`}
      count = 1
        // check diagonal                                       // admittedly was not entirely sure how i was gonna handle this...
      
      // no win -> switch player
      this.p1turn = !this.p1turn
      
      return `${this.p1turn ? 'Player 2' : 'Player 1'} has a turn`
    }
  }


// or...


class Connect4 { // closest i could fine to my method (others didnt seem much better, so ok to use)
    constructor() {
      this.player = 1
      this.board = Array.from({ length: 7 }, () => []) // doesnt fill out columns/rows, leaves empty, then any disc that added is just now out the length
      this.finished = false
    }
    play(col) {
      if(this.finished)
        return 'Game has finished!'
                                                // obv checks for game state purposes
      if(this.board[col].length >= 6)
        return 'Column full!'
  
      const row = this.board[col].length
      this.board[col].push(this.player) // ok so gets row index b4 adding disc, so new one is at proper index #
      const range4 = Array.from({ length: 4 }, (_, i) => i) // so... basic array of length 4, w/ elements being their index? ok...
      this.finished = range4.some(i => // .some() checking for if any win conditions are met
        range4.every(j => this.board[col][row-i+j] === this.player) || // column win, which new one would automatically be at the top for, ok not too bad
        range4.every(j => (this.board[col-i+j] || [])[row] === this.player) || // i dont understand the -i+j shit... how the hell is it supposed to check going both directions?
        range4.every(j => (this.board[col-i+j] || [])[row-i+j] === this.player) || // i feel like this and other solns are only considering cases where the added disc is the highest one...
        range4.every(j => (this.board[col-i+j] || [])[row+i-j] === this.player)
      )
      
      if(this.finished)
        return `Player ${this.player} wins!`
  
      let ret = `Player ${this.player} has a turn`
      this.player = this.player === 1 ? 2 : 1
      return ret
    }
  }