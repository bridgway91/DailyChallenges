// Your task is to complete the class called Game. You will be given the board size as an integer board that will be between 1 and 26, therefore the game size will be board x board. You will be given an array of lines that have already been taken, so you must complete all possible squares.

// Rules
// 1.  The integer board will be passed when the class is initialised.
// 2.  board will be between 1 and 26.
// 3.  The lines array maybe empty or contain a list of line integers.
// 4.  You can only complete a square if 3 out of the 4 sides are already complete.
// 5.  The lines array that is passed into the play() function may not be sorted numerically!

// Returns
// Return an array of all the lines filled in including the original lines.
// Return array must be sorted numerically.
// Return array must not contain duplicate integers.

// Example 1
// Initialise
// Initialise a board of 2 squares by 2 squares where board = 2
// Line Numbering
// o─1─o─2─o
// │   │   │
// 3   4   5
// │   │   │
// o─6─o─7─o
// │   │   │
// 8   9  10
// │   │   │
// o─11─o─12─o
// So for the line input of [1, 3, 4] to complete the square line 6 is needed

// Game Play
// board = 2;
// lines = [1, 3, 4];
// game = new Game(board);
// game.play(lines) => [1, 3, 4, 6]

// Example 2
// Initialise
// board = 2;
// lines = [1, 2, 3, 4, 5, 8, 10, 11, 12];
// game = Game.new(board);
// game.play(lines) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Good luck and enjoy!


function Game(board){ // partially used CGPT, helping speed this all along as these challenges are becoming too involved for a 20min exercise
    this.squares = {};
    const horLength = board;
    const verLength = board + 1;
    const linesPerRow = horLength + verLength;
  
    let squareNum = 1;
    for (let row = 0; row < board; row++) {
      for (let col = 0; col < board; col++) {
        const top = row * linesPerRow + col + 1;
        const bottom = (row + 1) * linesPerRow + col + 1;
        const left = row * linesPerRow + board + col + 1;
        const right = left + 1;
  
        this.squares[squareNum++] = [top, left, right, bottom];
      }
    }
  }
  
  Game.prototype.play = function(lines){
    let knownLines = new Set(lines)
    let addedLines = new Set()
    let newLines
    do {
      newLines = new Set()
      for (let [squareId, squareLines] of Object.entries(this.squares)) {
        // Remove known lines
        let remaining = squareLines.filter(line => !knownLines.has(line))
        if (remaining.length === 1) {
          let missingLine = remaining[0]
          newLines.add(missingLine)
        }
      }
      // Add newLines to knownLines for next loop
      for (let line of newLines) knownLines.add(line)
      // Also track lines added during all iterations
      for (let line of newLines) addedLines.add(line)
    } while (newLines.size > 0)
      
    return Array.from(knownLines).sort((a, b) => a - b)
  }