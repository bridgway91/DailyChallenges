// You have an array of integers and have a frog at the first position
// [Frog, int, int, int, ..., int]
// The integer itself tells you the length and the direction of the next jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position

// Your objective is to find how many jumps are needed to jump out of the array.
// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5]; 
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)


function solution(a) { // basically nothing until you have to consider it getting stuck (like in a [1,-1] setup)
    let frog = 0
    let jumps = 0
    let visited = [frog]
    while(frog >= 0 && frog < a.length) {
      jumps++
      frog += a[frog]
      if (visited.includes(frog)) {
        return -1
      } else {
        visited.push(frog)
      }
    }
    return jumps
  }