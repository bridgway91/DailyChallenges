// Your function will receive a string of nine "X", "O", and/or "-" characters representing the state of a tic tac toe board, for example the string
// "X-OXXXO-O"
// would represent the board
// X-O
// XXX
// O-O
// where player X has won by getting three in a row horizontally on the middle row.

// Your function needs to return True/true/TRUE (depending on the language you're using) if either the X or the O player has won the game by getting three in a row vertically, horizontally, or diagonally; or False/false/FALSE if there is no winner.

// A few more examples:
// "---------" - False - no one has even made a move yet!
// "XOOOXXXXO" - False - no one got three in a row here.
// "OXO-XOX-O" - True - player O won by getting three in a row vertically in the third column.


function regexTicTacToeWinChecker(board) { // had to look at solns, didnt really know how to start with it, but turns out there arent that many diff winning board states, so just recreating them in regex isnt too difficult
    const tests = [/(\w)\1\1(...)*$/gm,/(\w)..\1..\1/gm,/(\w)...\1...\1/gm,/^..(\w).\1.\1/gm]
    return tests.some(e=>e.test(board))
  }
  