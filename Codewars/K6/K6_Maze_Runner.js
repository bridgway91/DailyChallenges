// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

// The Maze array will look like
// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

// ..with the following key
//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
// direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// 4. If you reach the end point before all your moves have gone, you should return Finish.
// 5. If you hit any walls or go outside the maze border, you should return Dead.
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!


function mazeRunner(maze, directions) { // actually kinda annoying dealing with all the 'out-of-bounds' issues.. fking error codes made no sense
    let start, end
    for (let i in maze) {
      if (maze[i].includes(2)) start = [Number(i),maze[i].indexOf(2)]
      if (maze[i].includes(3)) end = [Number(i),maze[i].indexOf(3)]
    } // didnt actually need end, or start really, just a position
  
    let pos = start
    const n = maze.length
    for (let dir of directions) {
      if (dir === 'N') pos[0]--
      if (dir === 'S') pos[0]++
      if (dir === 'E') pos[1]++
      if (dir === 'W') pos[1]--
      
      if (pos[0] >= n || pos[1] >= n || pos[0] < 0 || pos[1] < 0) return 'Dead'
      if (maze[pos[0]][pos[1]] === 3) return 'Finish'
      if (maze[pos[0]][pos[1]] === 1 || maze[pos[0]][pos[1]] === undefined) return 'Dead'
    }
    return 'Lost'
  }


// alternatively...

function mazeRunner(maze, directions) { // main takeaway is just the final if-statements, good bit cleaner than mine
    var path = Array(), curX, curY;
    for (var i = 0; i < maze.length; i++) {
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 2) {
          curX = j;
          curY = i;
        }
      }
    }
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] == 'N') curY--;
      if (directions[i] == 'S') curY++;
      if (directions[i] == 'W') curX--;
      if (directions[i] == 'E') curX++;
      
      // path.push(maze[curY][curX]); // guess he didnt need path
      if (!maze[curY]) return 'Dead';
      if (maze[curY][curX] == 3) return 'Finish';
      if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
    }
    return 'Lost';
  }