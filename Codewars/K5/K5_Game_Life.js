// ...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
// N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks (PHP: basic black and white squares) respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe:
// eg:
// console.log(htmlize(cells));


function nextGen(cells) { // personally assumed all the loops would be too time-intense and tried to come up with a better soln, but couldnt figure it out... apparently this is good enough
  const rows = cells.length;
  const cols = cells[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Helper to check a neighbor safely
  const get = (i, j) =>
    i >= 0 && i < rows && j >= 0 && j < cols ? cells[i][j] : 0;

  // Loop through each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let liveNeighbors = 0;

      // Count 8 neighbors
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue; // skip self
          liveNeighbors += get(i + x, j + y);
        }
      }

      // Apply the rules
      if (cells[i][j] === 1) {
        result[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
      } else {
        result[i][j] = liveNeighbors === 3 ? 1 : 0;
      }
    }
  }

  return result;
}
