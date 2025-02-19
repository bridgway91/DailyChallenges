// Task
// Your task is to escape from the carpark using only the staircases provided to reach the exit. You may not jump over the edge of the levels (you’re not Superman!) and the exit is always on the far right of the ground floor.

// Rules
// 1. You are passed the carpark data as an argument into the function.
// 2. Free carparking spaces are represented by a 0
// 3. Staircases are represented by a 1
// 4. Your parking place (start position) is represented by a 2 which could be on any floor.
// 5. The exit is always the far right element of the ground floor.
// 6. You must use the staircases to go down a level.
// 7. You will never start on a staircase.
// 8. The start level may be any level of the car park.
// 9. Each floor will have only one staircase apart from the ground floor which will not have any staircases.

// Returns
// Return an array of the quickest route out of the carpark
// R1 = Move Right one parking space.
// L1 = Move Left one parking space.
// D1 = Move Down one level.

// Example
// Initialise
// carpark = [[1, 0, 0, 0, 2],
//            [0, 0, 0, 0, 0]];
// Working Out
// - You start in the most far right position on level 1
// - You have to move Left 4 places to reach the staircase => "L4"
// - You then go down one flight of stairs => "D1"
// - To escape you have to move Right 4 places => "R4"
// Result
// result = ["L4", "D1", "R4"]

// Good luck and enjoy!


function escape(carpark){ // proved harder than i expected, expect there to be a much slimmer way to solve ... after looking at other solns, actually not much easier ways
    // on upper levels: ind(2)-ind(1) = # moved, pos if left, neg if right
    // bot lvl => length-1 - ind(2) = # moved, always right
    // for going down multiple times in a row, can build res as a string and checked res.slice(-2,-1)
    // 'going down' is also just increasing [y] in the [y][x] index track
    let res = '', pos = []
    for (let a in carpark) {
      if(carpark[a].includes(2)) {pos = [+a,carpark[a].indexOf(2)]}
    }
  
    while (pos[0] < (carpark.length-1)) {
      let h = pos[1] - carpark[pos[0]].indexOf(1)
      pos[1] = carpark[pos[0]].indexOf(1)
      if(h!=0){
        if(res.slice(-2,-1)=='D') res+=' '
        res += (h>0 ? 'L' : 'R')+Math.abs(h)
      }
      pos[0]++
      res = res.slice(-2,-1)=='D' ? res.slice(0,-1) + (+res.slice(-1)+1) : res + ' D1'
    }
  
    let bottom = carpark[0].length-1-pos[1]
    return (res + (bottom>0 ? ` R${bottom}` : '')).split(' ').filter(e=>e)
  }