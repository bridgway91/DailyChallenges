// Your task in the kata is to determine how many boats are sunk damaged and untouched from a set amount of attacks. You will need to create a function that takes two arguments, the playing board and the attacks.

// Example Game
// The board
// X 1->M , left->right
// Y N->1 , top->bottom
// so (1,1) bot-left, (M,N) top-right

// Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat. Digits 1-3 represent boats which vary in length 1-4 spaces long. There will always be at least 1 boat up to a maximum of 3 in any one game. Boat sizes and board dimentions will vary from game to game.

// Attacks
// Attacks are calculated from the bottom left, first the X coordinate then the Y. There will be at least one attack per game, and the array will not contain duplicates.
// [[2, 1], [1, 3], [4, 2]];
// First attack      `[2, 1]` = `3`
// Second attack `[1, 3]` = `0`
// Third attack     `[4, 2]` = `1`

// Function Initialization
// board = [[0,0,0,2,2,0],
//          [0,3,0,0,0,0],
//          [0,3,0,1,0,0],
//          [0,3,0,1,0,0]];
// attacks = [[2, 1], [1, 3], [4, 2]];
// damagedOrSunk(board, attacks);

// Scoring
// 1 point for every whole boat sank.
// 0.5 points for each boat hit at least once (not including boats that are sunk).
// -1 point for each whole boat that was not hit at least once.

// Sunk or Damaged
// `sunk` = all boats that are sunk
// `damaged` = all boats that have been hit at least once but not sunk
// `notTouched/not_touched` = all boats that have not been hit at least once

// Output
// You should return a hash with the following data
// `sunk`, `damaged`, `notTouched`, `points`
// Example Game Output
// In our above example..
// First attack: `boat 3` was damaged, which increases the `points` by `0.5`
// Second attack: miss nothing happens
// Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
// `boat 2` was untouched so `points -1` and `notTouched +1` in Javascript/Java/C# and `not_touched +1` in Python/Ruby.
// No whole boats sank
// Return Hash
// { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }


function damagedOrSunk (board, attacks){ // a bit more involved than i expected going in, but still relatively easy
    let size = {}
    board.flat().forEach(e=>{
      size[e] = size[e] ? [size[e][0]+1,size[e][1]+1] : [1,1]
    })
  
    for (let a of attacks) {
      let target = board[board.length-a[1]][a[0]-1]
      size[target][1]--
    }
  
    let res = {sunk:0,damaged:0,notTouched:0,points:0}
    for (let b of Object.keys(size)) {
      if(b>0) {
        if(size[b][1] <= 0) {
          res.sunk++
          res.points++
        } else if (size[b][1] < size[b][0]) {
          res.damaged++
          res.points += 0.5
        } else {
          res.notTouched++
          res.points--
        }
      }
    }
  
    return res
  }