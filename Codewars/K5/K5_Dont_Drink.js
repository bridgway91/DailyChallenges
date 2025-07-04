// Don't Drink the Water
// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }
 
// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.


function separateLiquids(glass) { // again, pretty simple
  if (!glass.length) return [];

  const density = {
    'O': 0.80,
    'A': 0.87,
    'W': 1.00,
    'H': 1.36
  };

  const rows = glass.length;
  const cols = glass[0].length;

  const flat = glass.flat();
  flat.sort((a, b) => density[a] - density[b]);

  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push(flat.slice(i * cols, (i + 1) * cols));
  }

  return result;
}
