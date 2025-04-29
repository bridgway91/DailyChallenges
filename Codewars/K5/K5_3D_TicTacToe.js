// Regular Tic-Tac-Toe is boring.
// That's why in this Kata you will be playing Tic-Tac-Toe in 3D using a 4 x 4 x 4 matrix!

// Kata Task
// Play the game. Work out who wins.

// Return a string
// O wins after <n> moves
// X wins after <n> moves
// No winner

// Rules
// Player O always goes first
// Input moves is list/array/tuple of [x,y,z] (zero based)
// Each player takes a turn until you find a winner, or there are no moves left
// Four of the same symbols in a row wins
// There may be more moves provided than are necessary to finish the game - that is for you to figure out


function playOX3D(moves) { // this version of the code can handle any size board
    const SIZE = 4;
  
    // Create a 4x4x4 board filled with null (empty)
    const board = Array.from({ length: SIZE }, () =>
      Array.from({ length: SIZE }, () =>
        Array(SIZE).fill(null)
      )
    );
  
    // All 13 directions to check from any given cell
    const directions = [
      [1, 0, 0], [0, 1, 0], [0, 0, 1],               // Straight lines: x, y, z
      [1, 1, 0], [1, -1, 0],                         // Diagonals in xy plane
      [1, 0, 1], [1, 0, -1],                         // Diagonals in xz plane
      [0, 1, 1], [0, 1, -1],                         // Diagonals in yz plane
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1]  // 3D space diagonals
    ];
  
    // Helper: check if a coordinate is inside the board
    function isInBounds(x, y, z) {
      return x >= 0 && x < SIZE && y >= 0 && y < SIZE && z >= 0 && z < SIZE;
    }
  
    // Helper: count consecutive pieces in one direction from (x, y, z)
    function countInDirection(x, y, z, dx, dy, dz, player) {
      let count = 0;
      for (let i = 1; i < 4; i++) { // Check up to 3 steps away
        const nx = x + dx * i;
        const ny = y + dy * i;
        const nz = z + dz * i;
  
        // Stop if out of bounds or not the same player's piece
        if (!isInBounds(nx, ny, nz) || board[nx][ny][nz] !== player) break;
        count++;
      }
      return count;
    }
  
    // Iterate through all moves
    for (let i = 0; i < moves.length; i++) {
      const [x, y, z] = moves[i];
      const player = i % 2 === 0 ? 'O' : 'X'; // O always goes first
  
      board[x][y][z] = player; // Mark the board
  
      // Check all 13 directions for a win
      for (const [dx, dy, dz] of directions) {
        const forward = countInDirection(x, y, z, dx, dy, dz, player);
        const backward = countInDirection(x, y, z, -dx, -dy, -dz, player);
  
        // 1 (the current cell) + forward + backward must reach 4
        if (1 + forward + backward >= 4) {
          return `${player} wins after ${i + 1} moves`;
        }
      }
    }
  
    // If we reach the end with no winner
    return "No winner";
  }
  