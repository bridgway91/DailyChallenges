// A bird flying high above a mountain range is able to estimate the height of the highest peak.
// Can you?

// Example
// The birds-eye view
// ^^^^^^
//  ^^^^^^^^
//   ^^^^^^^
//   ^^^^^
//   ^^^^^^^^^^^
//   ^^^^^^
//   ^^^^
// The bird-brain calculations
// 111111
//  1^^^^111
//   1^^^^11
//   1^^^1
//   1^^^^111111
//   1^^^11
//   1111
// -------------
// 111111
//  12222111
//   12^^211
//   12^21
//   12^^2111111
//   122211
//   1111
// -------------
// 111111
//  12222111
//   1233211
//   12321
//   12332111111
//   122211
//   1111
// -------------
// Height = 3


function peakHeight(mountain) { // annoying talking with cgpt, cuz i was just gonna do height = minimum # peaks above/below/left/right + 1, but the code I got back for that didnt work, so we went with another solution, but I swear my idea should work! ... shouldve just done it myself...
  const rows = mountain.length;
  const cols = mountain[0].length;
  const grid = mountain;

  // Create a height map initialized to -1 for '^' and 0 for others
  const heightMap = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => (grid[r][c] === '^' ? -1 : 0))
  );

  let currentHeight = 1;
  let changed = true;

  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ];

  while (changed) {
    changed = false;

    const toUpdate = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (heightMap[r][c] !== -1) continue;

        for (const [dr, dc] of directions) {
          const nr = r + dr, nc = c + dc;
          if (
            nr < 0 || nr >= rows || nc < 0 || nc >= cols ||
            heightMap[nr][nc] >= 0
          ) {
            toUpdate.push([r, c]);
            break;
          }
        }
      }
    }

    for (const [r, c] of toUpdate) {
      heightMap[r][c] = currentHeight;
      changed = true;
    }

    currentHeight++;
  }

  let maxHeight = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      maxHeight = Math.max(maxHeight, heightMap[r][c]);
    }
  }

  return maxHeight;
}


// or....

var peakHeight = function(mountain, counter = 0) { // much better version of same method cgpt went with... really should get back to coding these myself (all caught up now, so hopefully tomorrow)
  if(mountain.every(row => row.every(sq => sq === " "))) return counter;

  let afterEdgeCheck = mountain.map((row,i) => row.map((sq, j) => {
    let up = mountain[i-1] ? mountain[i-1][j] : " ";
    let down = mountain[i+1] ? mountain[i+1][j] : " ";
    let left = mountain[i][j-1] || " ";
    let right = mountain[i][j+1] || " ";
    return [up,down,left,right].includes(" ") ? " " : sq;
  }));

  return peakHeight(afterEdgeCheck, ++counter);
}